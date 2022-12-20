import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Log = () => {
//   const router = useRouter()
//   const { lid } = router.query
//   const [Loading, setLoading] = useState(true)
//   const [mydata, setMydata] = useState([])
//   const getdata = async () => {
//     let res = await axios.get("http://localhost:3000/api/log")
//     setMydata((res.data))
//   }

//   function timeSince(date) {
//     date = new Date(Date.now() - date);
//     var seconds = Math.floor((new Date() - date) / 1000);

//     var interval = seconds / 31536000;

//     if (interval > 1) {
//       return Math.floor(interval) + " years";
//     }
//     interval = seconds / 2592000;
//     if (interval > 1) {
//       return Math.floor(interval) + " months";
//     }
//     interval = seconds / 86400;
//     if (interval > 1) {
//       return Math.floor(interval) + " days";
//     }
//     interval = seconds / 3600;
//     if (interval > 1) {
//       return Math.floor(interval) + " hours";
//     }
//     interval = seconds / 60;
//     if (interval > 1) {
//       return Math.floor(interval) + " minutes";
//     }
//     return Math.floor(seconds) + " seconds";
//   }
//   useEffect(() => {
//     getdata();
//     if (mydata.length > 0) {
//       let arr = new Array()
//       mydata.map((i) => {
//         if (i._id === lid) {
//           setMydata(i)
//         }
//       })
//       console.log(mydata)
//     }
//   }, []);
  return (
    <div>
      <section className="min-h-screen text-gray-400 body-font bg-gray-900">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Pitchfork Kickstarter Taxidermy</h1>
            <p className="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
            <a className="text-indigo-400 inline-flex items-center mt-4">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">CATEGORIES</h2>
            <nav className="flex flex-wrap list-none -mb-1">
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="hover:text-white">First Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="hover:text-white">Second Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="hover:text-white">Third Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="hover:text-white">Fourth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="hover:text-white">Fifth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="hover:text-white">Sixth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="hover:text-white">Seventh Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="hover:text-white">Eighth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Log