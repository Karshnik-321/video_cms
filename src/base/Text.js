import React from 'react';
import classNames from 'classnames';

const CmsText = ({
    weight,
    size,
    text,
    children,
    preset = 'default',
    className: classOverride,
    style: customStyle,
    ...rest
}) => {


    const content = text || children;

    const baseClass = presets[preset];

    const classList = classNames(
        baseClass,
        size ? sizeStyles[size] : sizeStyles['md'],
        weight ? fontWeightStyles[weight] : fontWeightStyles['extraBold'],
        classOverride
    );

    return (
        <span {...rest} className={classList} style={customStyle}>
            {content}
        </span>
    );
};

export default CmsText;

const sizeStyles = {
    xxl: 'text-4xl leading-tight',
    semiBold: 'text-2xl leading-tight',
    bold: 'text-3xl leading-tight',
    lg: 'text-xl leading-6',
    md: 'text-base leading-3',
    sm: 'text-base leading-5',
    xs: 'text-sm leading-4',
    xxs: 'text-xs leading-4',
};

const fontWeightStyles = {
    ultraLight: 'font-extralight',
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extraBold: 'font-extrabold',
};

const baseStyle = 'text-base font-extralight text-black';
const headingStyle = 'text-2xl'
const subHeadingStyle = 'text-lg'

const presets = {
    default: `${baseStyle}`,
    semiBold: `${baseStyle} ${fontWeightStyles.semibold}`,
    thin: `${baseStyle} ${fontWeightStyles.light}`,
    light: `${baseStyle} ${fontWeightStyles.light}`,
    heading: `${headingStyle}`,
    normal: `${baseStyle}`,
    medium: `${baseStyle}`,
    subHeading: `${subHeadingStyle} ${fontWeightStyles.medium}`,
    italic: `${baseStyle} italic`,
};

