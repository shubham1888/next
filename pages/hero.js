import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About me
                            {/* <br className="hidden lg:inline-block" />readymade gluten */}
                        </h1>
                        <p className="mb-8 leading-relaxed">"Welcome to my portfolio website! My name is shubham shah and I am a student. I am passionate about programming and have been working in the industry for 2 years.

                            On this website, you will find a selection of my work and achievements. From [Project or accomplishment], to [Another project or accomplishment], I have had the opportunity to work on a wide range of projects and develop a diverse set of skills.

                            Thank you for visiting my website. I hope you enjoy learning more about my work and experience. Feel free to contact me if you have any questions or would like to collaborate on a project."</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                        <Image src='/hero.png' priority width={700} height={600} alt={'Logo'} className="rounded-md" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero