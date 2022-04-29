import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ITag extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
    children: ReactNode;
}