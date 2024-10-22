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

import DashboardComponent from '../components/Dashboard/DashBoard'

export default function Dashboard() {
  return (
    <>
    
      <div>
        <DashboardComponent />
      </div>
    </>
  )
}
