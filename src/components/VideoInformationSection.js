import React from 'react'
import CmsText from '../base/Text'
import CmsTextInput from '../base/TextInput'

const VideoInformationSection = () => {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
                <div>
                    <CmsText text={"Video Information"} preset="semiBold" />
                </div>
                <div>
                    <CmsText text={"Make your video stand out with personalized information."} className={"text-gray-600"} preset='thin' weight={"regular"} size={"sm"} />
                </div>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                {/* Entry Date */}
                <div className="col-span-full">
                    <CmsTextInput inputType='date' labelText={"Entry Date & Time"} textInputStyle={"block w-full  py-1 pl-4 pr-4"}/>
                </div>

                {/* Platform */}
                <div className="col-span-full">
                    <CmsTextInput labelText={"Platform"} value="YouTube"/>
                </div>

                {/* Title */}
                <div className="col-span-full">
                    <CmsTextInput labelText={"Title"} placeholder="Placeholder Text"/>
                </div>

                {/* Editing Date */}
                <div className="col-span-full">
                    <CmsTextInput labelText={"Editing Date"} placeholder="Edit Date"/>
                </div>

                {/* Email ID */}
                <div className="col-span-full">
                    <CmsTextInput inputType='email' labelText={"Email ID"} value={"jatin.kumar@jagrannewmedia.com"}/>
                </div>

                {/* Editor Name */}
                <div className="col-span-full">
                    <CmsTextInput labelText={"Editor Name"} value="Jatin Kumar"/>
                </div>

                {/* Team */}
                <div className="col-span-full">
                    <CmsTextInput labelText={"Team"}  value="Editorial"/>
                </div>

                {/* Music Link */}
                <div className="col-span-full">
                    <CmsTextInput labelText={"Music Link"} placeholder="Music Link"/>
                </div>

                {/* Campaign Name */}
                <div className="col-span-full">
                    <CmsTextInput labelText={"Campaign Name"} placeholder="Campaign Name"/>
                </div>

                {/* Other Music Links */}
                <div className="col-span-full">
                    <CmsTextInput labelText={"Other Music Links"} placeholder="Other Music Links"/>
                </div>
            </div>
        </div>
    )
}

export default VideoInformationSection
