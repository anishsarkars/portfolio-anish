'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['Wander', 'Archive', 'Story', 'Connect'];
const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4';

function StaggeredFade({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const chars = Array.from(text);

  return (
    <span ref={ref} aria-label={text} className="inline-block">
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: i * 0.07, duration: 0.5, ease: 'easeOut' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export function CinematicHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#010101] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* subtle overlay keeps the white type legible over any frame */}
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <nav className="relative z-20 flex items-center justify-between px-5 py-6 sm:px-8 md:justify-center md:gap-16">
        <span className="text-sm font-light uppercase tracking-[0.25em] text-white md:tracking-[0.3em]">
          Organic Visions
        </span>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-glass fixed left-4 right-4 top-16 z-50 flex flex-col items-center gap-5 rounded-2xl py-8 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {NAV_LINKS.map((label, i) => (
              <motion.a
                key={label}
                href="#"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
                className="text-sm font-light uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-white"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center px-5 pt-12 text-center sm:px-8 sm:pt-16 md:pt-24">
        <h2 className="font-garamond mb-6 text-4xl font-normal leading-[1.08] tracking-tight text-white sm:mb-8 sm:text-6xl md:text-8xl lg:text-9xl">
          <span className="block">
            <StaggeredFade text="WITNESS THE" />
          </span>
          <span className="block">
            <StaggeredFade text="HIDDEN REALM" />
          </span>
        </h2>

        <motion.p
          className="mb-8 max-w-xs text-sm font-light leading-relaxed text-white/70 sm:mb-10 sm:max-w-md sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          An odyssey through delicate living forms,
          <br className="hidden sm:block" /> revealed by lens and curiosity.
        </motion.p>

        <motion.button
          type="button"
          className="liquid-glass rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-white/90 sm:px-10 sm:py-4 sm:tracking-[0.2em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          Begin the Experience
        </motion.button>
      </div>
    </section>
  );
}

export default CinematicHero;
