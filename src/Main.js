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

import Dashboard from './pages/Dashboard'

export default function Main() {

  return (
    <>
      <div>
        <Dashboard />
      </div>
    </>
  )
}