export interface ButtonsButtonProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Primary Large" → rwubnjgW_
   *   "Primary Medium" → b_66fXdIn
   *   "Primary Small" → pEyDOfBFh
   *   "Secondary Large" → AJcLV1OgG
   *   "Secondary Medium" → RzaoFUJMf
   *   "Secondary Small" → ZVL59hAs_
   */
  variant?: 'Primary Large' | 'Primary Medium' | 'Primary Small' | 'Secondary Large' | 'Secondary Medium' | 'Secondary Small' | 'AJcLV1OgG' | 'ZVL59hAs_' | 'RzaoFUJMf' | 'rwubnjgW_' | 'pEyDOfBFh' | 'b_66fXdIn';
  /**
   * Title — pass as `tipS0P7cJ` not `title`.
   * @default "Sign up"
   */
  tipS0P7cJ?: string;
  /**
   * Icon Right — pass as `GLWImmBy_` not `iconRight`.
   * @default false
   */
  GLWImmBy_?: boolean;
  /**
   * Icon Right Color — pass as `LdEuC589O` not `iconRightColor`.
   * @default "var(--token-a0b108d1-905f-48b6-9b39-89b275654751, rgb(252, 252, 250)) "
   */
  LdEuC589O?: string;
  /**
   * Icon Left — pass as `HBR9r6Wzz` not `iconLeft`.
   * @default false
   */
  HBR9r6Wzz?: boolean;
  /**
   * Icon Left Color — pass as `rt9DsEiKG` not `iconLeftColor`.
   * @default "var(--token-958d6a9e-bb7c-4a88-a47a-70db899d1dd5, rgb(36, 36, 36)) "
   */
  rt9DsEiKG?: string;
  /**
   * Link — pass as `odb0bWURU` not `link`.
   */
  odb0bWURU?: string;
  /**
   * Hover — pass as `OAQbadD9M` not `hover`.
   */
  OAQbadD9M?: () => void;
  /**
   * Tap — pass as `TdzRKJaWY` not `tap`.
   */
  TdzRKJaWY?: () => void;
  /**
   * New Tab — pass as `Ud3HdUmNm` not `newTab`.
   * @default false
   */
  Ud3HdUmNm?: boolean;
  /**
   * Apple Logo — pass as `saKEMwXXL` not `appleLogo`.
   * @default false
   */
  saKEMwXXL?: boolean;
  /** Additional properties */
  [key: string]: unknown;
}
