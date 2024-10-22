/* 
  This example requires some changes to your config:
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
*/

'use client'

import { useState } from 'react'
import {
  Bars3Icon} from '@heroicons/react/24/outline'
import CmsButton from './base/Button'
import Header from './components/Header/Header'
import YoutubeEmbed from './components/Dashboard/YoutubeEmbed'
import VideoInformationSection from './components/Dashboard/VideoInformationSection'
import DialogBox from './components/Dashboard/DialogBox'
import CmsTextInput from './base/TextInput'



// Main Dashboard Component
export default function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
       
        <DialogBox setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <div className='flex flex-row w-full justify-end'>
              <Header />
            </div>
          </div>

          {/* Main Form Section */}
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <form>
                <div className="space-y-12">
                  <YoutubeEmbed />
                  <VideoInformationSection />
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <CmsButton buttonTypeStyle={"primary"} buttonText={"Save Changes"}/>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}