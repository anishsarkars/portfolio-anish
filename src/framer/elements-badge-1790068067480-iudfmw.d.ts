export interface ElementsBadgeProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Large" → rA3r5Ubhp
   *   "Small" → ih1f0O9Of
   */
  variant?: 'Large' | 'Small' | 'rA3r5Ubhp' | 'ih1f0O9Of';
  /**
   * Title — pass as `D_QyhowU2` not `title`.
   * @default "Version 2.4 released"
   */
  D_QyhowU2?: string;
  /** Additional properties */
  [key: string]: unknown;
}
