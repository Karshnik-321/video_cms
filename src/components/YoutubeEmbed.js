import { DocumentArrowDownIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import React from 'react'
import CmsTextInput from '../base/TextInput'
import CmsButton from '../base/Button'
import CmsText from '../base/Text'

const YoutubeEmbed = () => {
    const rightIcon = () => {
        return (
            <CmsButton classStyle={"inline-flex items-center gap-x-1.5 rounded-r-[6px] bg-red-600 px-2.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"} buttonText={"Fetch Detail"} icon={<DocumentArrowDownIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-100" />} />
        )
    }
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
                <div>
                    <CmsText text={"Youtube Embed"} preset="semiBold" />
                </div>
                <div>
                    <CmsText text={"Paste your YouTube Embed, and we'll do the rest."} className={"text-gray-600"} preset='thin' weight={"regular"} size={"sm"} />
                </div>

                {/* <p className="mt-1 text-sm leading-6 text-gray-600">Paste your YouTube Embed, and we'll do the rest.</p> */}
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="col-span-full">
                    <div className=''>
                        <CmsTextInput rightIcon={rightIcon()} leftAccessoryStyle={<VideoCameraIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />} labelText={"Embed Code"} placeholder="Enter embed code here" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YoutubeEmbed
