import React from 'react';
import { ITopPageCompnentProps } from './TopPageComponent.props';

const TopPageComponent: React.FC<ITopPageCompnentProps> = ({ page, products, firstCategory }) => {
    return (
        <>
            {products && products.length}
        </>
    );
};

export default TopPageComponent;