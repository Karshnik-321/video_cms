import { DocumentArrowDownIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import React from 'react'

const YoutubeEmbed = () => {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Youtube Embed</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Paste your YouTube Embed, and we'll do the rest.</p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="col-span-full">
                    <label htmlFor="embed-code" className="block text-sm font-medium leading-6 text-gray-900">
                        Embed Code
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                        <div className="relative flex flex-grow items-stretch focus-within:z-10">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <VideoCameraIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="embed-code"
                                name="embed-code"
                                type="text"
                                placeholder="Enter embed code here"
                                className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-r-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            <DocumentArrowDownIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-100" />
                            Fetch Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YoutubeEmbed
