import React from 'react'

const VideoInformationSection = () => {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
                {/* <CmsTextInput placeholder='Placeholder Text'/> */}
                {/* <CmsButton buttonTypeStyle='secondary' buttonText={"Settings"} icon={<Cog6ToothIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600"
                        />}/> */}
                {/* <CmsText preset="semiBold" text={'Test for Base Component'} className={'text-orange-500'} /> */}
                <h2 className="text-base font-semibold leading-7 text-gray-900">Video Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Make your video stand out with personalized information.</p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                {/* Entry Date */}
                <div className="col-span-full">
                    <label htmlFor="entry-date" className="block text-sm font-medium leading-6 text-gray-900"> Entry Date & Time </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            id="entry-date"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Platform */}
                <div className="col-span-full">
                    <label htmlFor="platform" className="block text-sm font-medium leading-6 text-gray-900">Platform</label>
                    <div className="mt-2">
                        <input
                            id="platform"
                            type="text"
                            value="YouTube"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Title */}
                <div className="col-span-full">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                    <div className="mt-2">
                        <input
                            id="title"
                            type="text"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Editing Date */}
                <div className="col-span-full">
                    <label htmlFor="editing-date" className="block text-sm font-medium leading-6 text-gray-900">Editing Date</label>
                    <div className="mt-2">
                        <input
                            id="editing-date"
                            type="text"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Email ID */}
                <div className="col-span-full">
                    <label htmlFor="email-id" className="block text-sm font-medium leading-6 text-gray-900">Email ID</label>
                    <div className="mt-2">
                        <input
                            id="email-id"
                            type="text"
                            value="jatin.kumar@jagrannewmedia.com"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Editor Name */}
                <div className="col-span-full">
                    <label htmlFor="editor-name" className="block text-sm font-medium leading-6 text-gray-900">Editor Name</label>
                    <div className="mt-2">
                        <input
                            id="editor-name"
                            type="text"
                            value="Jatin Kumar"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Team */}
                <div className="col-span-full">
                    <label htmlFor="team" className="block text-sm font-medium leading-6 text-gray-900">Team</label>
                    <div className="mt-2">
                        <input
                            id="team"
                            type="text"
                            value="Editorial"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Music Link */}
                <div className="col-span-full">
                    <label htmlFor="music-link" className="block text-sm font-medium leading-6 text-gray-900">Music Link</label>
                    <div className="mt-2">
                        <input
                            id="music-link"
                            type="text"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Campaign Name */}
                <div className="col-span-full">
                    <label htmlFor="campaign-name" className="block text-sm font-medium leading-6 text-gray-900">Campaign Name</label>
                    <div className="mt-2">
                        <input
                            id="campaign-name"
                            type="text"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Other Music Links */}
                <div className="col-span-full">
                    <label htmlFor="other-music-links" className="block text-sm font-medium leading-6 text-gray-900">Other Music Links</label>
                    <div className="mt-2">
                        <input
                            id="other-music-links"
                            type="text"
                            className="block w-full rounded-md outline-none border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoInformationSection
