import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import axios from 'axios'

const Log = ({ data }) => {
  const router = useRouter()
  const { pid } = router.query
  const [Loading, setLoading] = useState(true)
  const [mydata, setMydata] = useState(data)

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
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-white text-lg">{mydata.username}</h2>
                  <h2 class="font-medium title-font mt-4 text-white text-lg">{pid}</h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base text-gray-400">{mydata.date.year}-{mydata.date.month}-{mydata.date.date}</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">{mydata.data}</p>
              </div>
              <MdOutlineFavoriteBorder />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Log


export async function getServerSideProps(context) {
  // console.log(context.query.pid)
  let res = await fetch(`https://server.shubham1888.repl.co/getsinglepost/${context.query.pid}`)
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}