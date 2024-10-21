import React, { useState } from 'react';

const CmsTextInput = ({
    leftIcon,
    rightIcon,
    containerStyle,
    style,
    textInputStyle,
    handleLeftIconClick,
    handleRightIconClick,
    inputType = 'text',
    rightAccessoryStyle,
    leftAccessoryStyle,
    ...inputProps
}) => {
    const [isFocused, setIsFocused] = useState(false);


    const textStyle = textInputStyle ?? "flex-1 outline-none py-0.4 pl-2 text-base";


    const borderColor = isFocused ? 'border-2 block w-full border-red-500 shadow-sm' : 'border-2 block w-full border border-gray-300 shadow-sm';

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleLeftAccessoryClick = () => {

        if (handleLeftIconClick) {
            console.log('Left accessory clicked');
            handleLeftIconClick()
        }
    };

    const handleRightAccessoryClick = () => {
        console.log('Right accessory clicked');
        if (handleRightIconClick) {
            handleRightIconClick()
        }
    };

    return (
        <div
            className={`flex items-center ${borderColor} rounded-md p-1 ${containerStyle}`}
            style={style}
        >
            {leftIcon && (
                <div className={`mr-2 cursor-pointer ${leftAccessoryStyle}`} onClick={handleLeftAccessoryClick}>
                    {leftIcon}
                </div>
            )}
            <input
                type={inputType}
                className={textStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...inputProps}
            />
            {rightIcon && (
                <div className={`ml-2 cursor-pointe ${rightAccessoryStyle}`} onClick={handleRightAccessoryClick}>
                    {rightIcon}
                </div>
            )}
        </div>
    );
};

export default CmsTextInput;
