import { useState, React } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Logo from "./../public/assets/arkfilm-2-logo.png"


function Navbar() {
  const [nav, setNav] = useState(false)

  function changeView() {
    setNav(!nav)
  }

  return (
    <div className="bg-black fixed w-full h-24 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src={Logo}
          alt="/"
          width="75"
          height="75"
        />
        <div>
          <ul
            className={nav ? 'hidden text-white' : 'hidden md:flex text-white'}
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={changeView} className="md:hidden">
            <AiOutlineMenu color="white" size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] p-8 h-screen bg-black ease-in duration-500'
              : ' fixed left-[-100%] top-[-100%]'
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <Image
                src="/../public/assets/arkfilm-2-logo.png"
                alt="/"
                height="75"
                width="75"
              ></Image>
              <div
                className="shadow-xl rounded-full shadow-gray-400 p-3 cursor-pointer"
                onClick={changeView}
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div>
              <p className="uppercase py-10 text-white">Lets Link and Build</p>
              <ul className="text-white uppercase py-3 ">
                <li className="my-3">About</li>
                <li className="my-3">Projects</li>
                <li className="my-3">Skills</li>
                <li className="my-3">Contact me</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
