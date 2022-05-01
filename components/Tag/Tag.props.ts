import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
    children: ReactNode;
}