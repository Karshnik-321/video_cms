import React from 'react'

const CmsButton = ({
    buttonType='submit',
    buttonText,
    children,
    icon,
    containerButtonStyle,
    buttonTypeStyle,
    classStyle,
    ...buttonProps
}) => {
    const content = buttonText || children;
    const defaultButtonStyle = `flex flex-row items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600`
    const primaryButtonStyle ="w-full group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-red-600"

    const styleType = {
        primary: defaultButtonStyle,
        secondary: primaryButtonStyle
    }
    const combinedButtonStyle =  buttonTypeStyle ? styleType[buttonTypeStyle] : classStyle ;

    return (
    <div >
      <button type={buttonType} {...buttonProps} className={combinedButtonStyle}>
        {
            icon ? (
                <div className='mr-2'>
                    {icon}
                </div>
            ) : null
        }
        {content}
      </button>
    </div>
  )
}

export default CmsButton
