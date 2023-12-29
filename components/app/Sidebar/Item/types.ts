export interface IMenuItem {
  label: string;
  link?: string;
  exact?: boolean;
  icon: {
    type: 'img' | 'font';
    name: string;
  };
  hasSubContent?: boolean;
  subMenus?: {
    label: string;
    link?: string;
  }[];
}
