'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

type Props = {
  name?: string;
  color?: string;
  textColor?: string;
  size?: number;
  labelTiltStrength?: number;
  showLabel?: boolean;
  pressScale?: number;
};

/**
 * UserCursor — a site-wide custom cursor. An arrow glyph tracks the pointer
 * with spring physics; a label pill trails behind on a laggier spring, rocking
 * with motion and scaling while pressed. The native cursor is hidden while
 * active. Skipped on coarse-pointer (touch) devices.
 */
export default function UserCursor({
  name = 'hi',
  color = 'var(--foreground)',
  textColor = 'var(--background)',
  size = 31,
  labelTiltStrength = 25,
  showLabel = true,
  pressScale = 0.92,
}: Props) {
  const [isTouch, setIsTouch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia('(pointer: coarse)');
    const sync = () => setIsTouch(!!mql.matches);
    sync();
    mql.addEventListener?.('change', sync);
    return () => mql.removeEventListener?.('change', sync);
  }, []);

  const arrowSpring = useMemo(() => ({ stiffness: 380, damping: 32, mass: 0.6 }), []);
  const labelSpring = useMemo(() => ({ stiffness: 220, damping: 26, mass: 0.7 }), []);

  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const arrowX = useSpring(mouseX, arrowSpring);
  const arrowY = useSpring(mouseY, arrowSpring);
  const labelX = useSpring(mouseX, labelSpring);
  const labelY = useSpring(mouseY, labelSpring);

  const scaleTarget = useMotionValue(1);
  const scale = useSpring(scaleTarget, { stiffness: 500, damping: 28, mass: 0.5 });
  useEffect(() => {
    scaleTarget.set(pressed ? pressScale : 1);
  }, [pressed, pressScale, scaleTarget]);

  const labelTiltTarget = useMotionValue(0);
  const labelRotation = useSpring(labelTiltTarget, { stiffness: 200, damping: 24, mass: 0.6 });

  const lastSample = useRef<{ x: number; y: number; t: number } | null>(null);

  useEffect(() => {
    if (isTouch) return;
    document.documentElement.classList.add('custom-cursor');

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();
      const last = lastSample.current;
      let vx = 0;
      let vy = 0;
      if (last) {
        const dt = Math.max(1, now - last.t);
        vx = ((x - last.x) / dt) * 1000;
        vy = ((y - last.y) / dt) * 1000;
      }
      lastSample.current = { x, y, t: now };
      mouseX.set(x);
      mouseY.set(y);
      const speed = Math.hypot(vx, vy);
      const norm = Math.min(1, speed / 1500);
      const sign = vx === 0 ? 0 : vx > 0 ? 1 : -1;
      labelTiltTarget.set(sign * norm * labelTiltStrength);
      setVisible(true);
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onEnter = () => setVisible(true);
    const onLeave = () => {
      setVisible(false);
      lastSample.current = null;
      labelTiltTarget.set(0);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      setPressed(false);
    };
  }, [isTouch, labelTiltStrength, mouseX, mouseY, labelTiltTarget]);

  const labelOffset = useMemo(() => ({ x: size * 0.9, y: size * 0.2 + 6 }), [size]);
  const labelTranslateX = useTransform(labelX, (v) => v + labelOffset.x);
  const labelTranslateY = useTransform(labelY, (v) => v + labelOffset.y);

  if (isTouch) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10000 }} aria-hidden="true">
      {showLabel && (
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            x: labelTranslateX,
            y: labelTranslateY,
            rotate: labelRotation,
            scale,
            background: color,
            borderRadius: 999,
            padding: `${size * 0.18}px ${size * 0.36}px`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
            opacity: visible ? 1 : 0,
            transformOrigin: '0% 50%',
            transition: 'opacity 140ms ease',
            willChange: 'transform, opacity',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              color: textColor,
              fontSize: Math.max(7, size * 0.43),
              lineHeight: 1.1,
              fontWeight: 600,
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              whiteSpace: 'nowrap',
              letterSpacing: 0.1,
            }}
          >
            {name}
          </div>
        </motion.div>
      )}

      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          x: arrowX,
          y: arrowY,
          scale,
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          transformOrigin: '0% 0%',
          transition: 'opacity 140ms ease',
          willChange: 'transform, opacity',
          pointerEvents: 'none',
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', overflow: 'visible' }}
        >
          <path
            d="M5 3 L23 14 L14 16 L11 24 Z"
            fill={color}
            stroke="rgba(0,0,0,0.18)"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
