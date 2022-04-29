import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IPProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 's' | 'm' | 'l';
    children: ReactNode;
}