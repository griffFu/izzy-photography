import React from 'react'
import Subheader from './Subheader'
import Image from 'next/image'
import Form from './Form'

function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="px-4 py-4 text-xl tracking-widest uppercase text-pink-600">
          Contact
        </p>
        <h2 className="px-4 py-4">Get in touch</h2>
        <div classname="grid lg:grid-cols-5 gap-8">
          {/* left side */}
          <div className="row-span-1 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../public/assets/contact-beer.jpg"
                  width="400"
                  height="400"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Isiah Hale</h2>
                <p>Videographer</p>
                <p className="py-2 break-all">Feel free to contact me for a</p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="row-span-1 col-start-2 col-end-3 lg:col-span-3 w-full h-auto shadowl-xl shadow-gray-400 rounded-xl lg:p-4">
            testing123
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
