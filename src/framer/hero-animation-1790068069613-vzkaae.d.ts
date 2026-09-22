export interface HeroAnimationProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Variant 1" → I6854:8695;6727:51425
   *   "Variant 2" → UUrpn2z1v
   */
  variant?: 'Variant 1' | 'Variant 2' | 'I6854:8695;6727:51425' | 'UUrpn2z1v';
  /** Additional properties */
  [key: string]: unknown;
}
