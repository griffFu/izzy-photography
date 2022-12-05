import React from 'react'

function Subheader({ section }) {
  return (
    <div className="h-screen w-full text-center relative">
      <div class="inline-flex justify-center items-center w-full">
        <hr class="my-8 w-full h-1 bg-black rounded border-0 dark:bg-black" />
        <div class="absolute left-1/2 px-2 bg-[#ecf0f3] -translate-x-1/2 dark:bg-[#ecf0f3]">
          <h2>{section}</h2>
        </div>
      </div>
    </div>
  )
}

export default Subheader
