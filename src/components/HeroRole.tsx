import { motion } from 'motion/react';
import { TextFlip } from './text-flip';

const titles = [
  'Founder & Product Engineer',
  'Building ZELP',
  'Product Builder',
  'Startup Founder',
  'Software Engineer',
  'Growth + GTM',
  'Product Designer',
];

export function HeroRole() {
  return (
    <TextFlip
      as={motion.span}
      className="text-sm text-muted-foreground"
      interval={2.6}
      transition={{ duration: 0.3 }}
    >
      {titles.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </TextFlip>
  );
}
