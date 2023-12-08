import { ReactNode } from "react";

export const menu: IMenuItem[] = [
  {
    title: "Github",
    link: "link",
    type: "item",
  },
  {
    title: "npm",
    link: "link",
    type: "item",
  },
  { type: "divider" },
  {
    title: "Getting Started",
    link: "link",
    type: "title",
  },
  {
    title: "Installation",
    link: "link",
    type: "sub-item",
  },
  {
    title: "Usage",
    link: "link",
    type: "sub-item",
  },
  {
    title: "Learn",
    link: "link",
    type: "sub-item",
  },
  { type: "divider" },
  {
    title: "Getting Started",
    link: "link",
    type: "title",
  },
  {
    title: "General",
    link: "link",
    type: "category",
  },
  {
    title: "Learn",
    link: "link",
    type: "sub-item",
  },
  {
    title: "Learn",
    link: "link",
    type: "sub-item",
  },
  {
    title: "Button",
    link: "/button",
    type: "sub-item",
  },
];

interface IMenuItem {
  separator?: ReactNode;
  icon?: ReactNode;
  title?: string;
  link?: string;
  children?: IMenuItem;
  type?: "category" | "item" | "sub-item"| "title" | "divider";
}
