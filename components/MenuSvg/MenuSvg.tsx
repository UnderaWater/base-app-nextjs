import React from 'react';

const MenuSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width="20" height="17" viewBox="0 0 20 17" fill="#7653FC" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="20" height="3" rx="1.5" />
            <rect y="7" width="20" height="3" rx="1.5" />
            <rect y="14" width="20" height="3" rx="1.5"/>
        </svg>
    );
};

export default MenuSvg;