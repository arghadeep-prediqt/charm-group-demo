import { CSSProperties, ReactNode } from "react";

export type RoleType = "silver" | "gold" | "diamond" | null;

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

export type StatusProps =
  | "available"
  | "waitlist"
  | "fullyBooked"
  | "fillingFast";
