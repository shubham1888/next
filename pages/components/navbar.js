import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import logo from "../../styles/logo.jpeg"

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <Image src='/logo.jpeg' width={40} height={40} alt={'Logo'} className="rounded-md" />
                        <span className="ml-3 text-xl">Computrtmaster</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <Link href={"/home"} className="mr-5 hover:text-white">Home</Link>
                        <Link href={"/post"} className="mr-5 hover:text-white">Post</Link>
                        <Link href={"/chat"} className="mr-5 hover:text-white">Chat</Link>
                        <Link href={"/admin"} className="mr-5 hover:text-white">Admin</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar