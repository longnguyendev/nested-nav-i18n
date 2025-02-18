export type NavigationItem = {
  title: string;
  path?: string;
  children?: Array<NavigationItem>;
};

export type Navigation = Array<NavigationItem>;
