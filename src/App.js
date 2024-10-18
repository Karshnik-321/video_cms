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
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  Cog6ToothIcon,
  XMarkIcon,
  HomeIcon,
  ListBulletIcon,
  VideoCameraIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// Navigation and user-related data
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Video List', href: '/videos', icon: ListBulletIcon, current: false }
]

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

// Helper function to manage class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Main Dashboard Component
export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* Sidebar Dialog for Mobile */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              
              {/* Sidebar Content */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://www.jagranimages.com/images/jagran-icon.svg"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <div className="text-xs font-semibold leading-6 text-gray-400">Editors</div>
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                  'h-6 w-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static Sidebar for Desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://www.jagranimages.com/images/jagran-icon.svg"
                className="h-16 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <div className="text-xs font-semibold leading-6 text-gray-400">Editors</div>
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5">
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-8 w-8 rounded-full bg-gray-50"
                />
                <span className="hidden lg:flex lg:items-center">
                  <span aria-hidden="true" className="ml-4 text-sm font-semibold leading-6 text-gray-900">
                    Admin
                  </span>
                  <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                </span>
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a
                      href={item.href}
                      className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>

          {/* Main Form Section */}
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <form>
                <div className="space-y-12">
                  {/* YouTube Embed Section */}
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

                  {/* Video Information Section */}
                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    <div>
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
                </div>

                {/* Submission Button */}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}