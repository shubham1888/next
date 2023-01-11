import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <Link href={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                            <Image src='/logo.jpeg' width={40} height={40} alt={'Logo'} className="rounded-md" />
                        </Link>
                        <Link href={"/"}><span className="ml-3 text-xl">Computrtmaster</span></Link>
                    </a>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 Computrtmaster —
                        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@shubham shah</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href='https://facebook.com/shubham.shah.1888' target={"_blank"} className="text-gray-400">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer