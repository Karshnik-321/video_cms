/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import { useState } from 'react'
import {
  Bars3Icon} from '@heroicons/react/24/outline'
import VideoInformationSection from '../components/Dashboard/VideoInformationSection'
import CmsButton from '../base/Button'
import YoutubeEmbed from '../components/Dashboard/YoutubeEmbed'
import Header from '../components/Header/Header'
import DialogBox from '../components/Dashboard/DialogBox'
import DashboardComponent from '../components/Dashboard/DashBoard'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
    
      <div>
        <DashboardComponent />
      </div>
    </>
  )
}
