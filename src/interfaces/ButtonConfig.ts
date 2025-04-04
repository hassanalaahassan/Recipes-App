export interface ButtonConfig {
  label: string;
  type: 'red' | 'green' | 'black' | string;
  labelColor : string;
  class?: string;
  icon?: string;
  action?: () => void;
}
