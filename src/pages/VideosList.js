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

import Videos from '../components/VideoList/Video'

export default function VideosList() {
  return (
    <>
      <div>
        <Videos />
      </div>
    </>
  )
}
