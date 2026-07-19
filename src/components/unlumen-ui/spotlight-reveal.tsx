'use client';

import { useEffect, useRef } from 'react';

type SpotlightRevealProps = {
  /** Image shown by default. */
  baseImage: string;
  /** Image revealed under the cursor spotlight. */
  revealImage: string;
  /** Large word behind the images. */
  bigText?: string;
  /** Short headline in the top-left. */
  headline?: string;
  /** Optional CTA. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Spotlight radius in px. */
  radius?: number;
  className?: string;
};

export function SpotlightReveal({
  baseImage,
  revealImage,
  bigText = 'Visuals',
  headline,
  ctaLabel,
  ctaHref,
  radius = 260,
  className = '',
}: SpotlightRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const reveal = revealRef.current;
    if (!root || !reveal) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const OFF = -9999;
    const target = { x: OFF, y: OFF };
    const smooth = { x: OFF, y: OFF };
    let raf = 0;

    const setMask = () => {
      const mask = `radial-gradient(circle ${radius}px at ${smooth.x}px ${smooth.y}px, #000 38%, rgba(0,0,0,0.6) 62%, rgba(0,0,0,0.22) 82%, transparent 100%)`;
      reveal.style.webkitMaskImage = mask;
      reveal.style.maskImage = mask;
    };

    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      target.x = OFF;
      target.y = OFF;
    };

    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);

    const loop = () => {
      smooth.x += (target.x - smooth.x) * 0.15;
      smooth.y += (target.y - smooth.y) * 0.15;
      setMask();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, [radius]);

  return (
    <div
      ref={rootRef}
      className={`relative isolate overflow-hidden bg-[#e4e4e4] ${className}`}
      style={{ minHeight: 'min(78vh, 620px)' }}
    >
      {/* Base image */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${baseImage})` }}
        aria-hidden="true"
      />

      {/* Big word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-4%] z-20 text-center">
        <span
          className="block font-medium leading-[0.8] tracking-[-0.04em] text-[#f4f1e8]"
          style={{ fontSize: 'clamp(110px, 26vw, 460px)' }}
        >
          {bigText}
        </span>
      </div>

      {/* Reveal image (masked spotlight) */}
      <div
        ref={revealRef}
        className="pointer-events-none absolute inset-0 z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${revealImage})`,
          WebkitMaskImage: 'radial-gradient(circle 0px at -9999px -9999px, #000, transparent)',
          maskImage: 'radial-gradient(circle 0px at -9999px -9999px, #000, transparent)',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 z-40 flex flex-col justify-between gap-8 p-8 sm:p-10">
        {headline ? (
          <h3 className="max-w-md text-xl font-medium leading-tight tracking-[-0.02em] text-[#111] sm:text-2xl">
            {headline}
          </h3>
        ) : (
          <span />
        )}

        {ctaLabel ? (
          <div>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full p-1.5"
            >
              <span className="absolute inset-y-1 left-1.5 rounded-full bg-white transition-[width] duration-500 ease-out w-[calc(100%-1.5rem-3rem)] group-hover:w-[calc(100%-0.75rem)]" />
              <span className="relative z-10 whitespace-nowrap px-6 py-2.5 text-sm font-medium text-[#111]">
                {ctaLabel}
              </span>
              <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-[#75c5de] transition-transform duration-500 ease-out group-hover:-translate-x-1.5">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M5 13L13 5M13 5H6M13 5V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

export default SpotlightReveal;
