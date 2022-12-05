import { useState, React } from 'react'

function Main() {
  return (
    <div className="h-screen w-full text-center z-auto">
      <div className="mx-auto max-w-[1240px] w-full h-full p-2 flex justify-center items-center">
        <div my-4>
          <h1>Isiah Hale</h1>
          <h1 className="text-green-900">
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600">
              Videographer
            </span>
          </h1>
          <p className="uppercase text-sm tracking-widest text-gray-600 py-2">
            == some cool slogan ==
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
