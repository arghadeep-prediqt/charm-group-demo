import { CSSProperties, ReactNode } from "react";

export interface CommonProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export interface MenuItemProps {
  title: string;
  icon: string;
  link: string;
}
