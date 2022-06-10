import { ButtonHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import CloseSvg from '../CloseSvg/CloseSvg';
import MenuSvg from '../MenuSvg/MenuSvg';
import UpSvg from '../UpSvg/UpSvg';

export const icons = {
    CloseSvg,
    MenuSvg,
    UpSvg
};

export type IconName = keyof typeof icons;

export interface IButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconName;
	appearance: 'primary' | 'white';
}