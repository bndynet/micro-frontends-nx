export interface Menu {
  label: string;
  icon?: string;
  routerLink?: string[];
  preventExact?: boolean;
  badge?: string;
  badgeClass?: string;
  url?: string;
  target?: '_blank' | '_self';
  class?: string;
  separator?: boolean;
  visible?: boolean;
  disabled?: boolean;
  command?: (args: any) => void;
  items?: Menu[];

  routerLinkOptions?: any;
  queryParamsHandling?: any;
  fragment?: string;
  preserveFragment?: any; 
  skipLocationChange?: any;
  replaceUrl?: any;
  state?: any;
  queryParams?: any;
}
