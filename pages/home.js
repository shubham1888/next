import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

const Home = ({ data }) => {
    const [Loading, setLoading] = useState(true)
    const [mydata, setMydata] = useState(data)
    const [text, setText] = useState("")
    const submitlog = async () => {
        let d = new Date()
        const day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        let data = {
            id: Date.now().toString(36),
            data: text,
            pass: null,
            fav: false,
            deleted: false,
            query: text.split(/(\s+)/).filter(function (e) { return e.trim().length > 0; }),
            category: null,
            origin: "https://computermaster.vercel.app/",
            date: {
                year: d.getFullYear(),
                month: d.getMonth() + 1,
                date: d.getDate(),
                day: day[d.getDay()],
                time: d.toLocaleTimeString(),
                now: Date.now(),
            },
            permissions: {
                read: true,
                update: true,
                del: true,
                mkfav: true,
                setpass: true
            },
        }
        // let res = await axios.post("https://server.shubham1888.repl.co/setpost", JSON.stringify(data))
        // console.log(res)
        fetch("https://server.shubham1888.repl.co/setpost", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => {
            // console.log("Post saved", res);
            toast.success('Successfully posted!')
            setText("")
        });
    }
    useEffect(() => {
        setLoading(false)
    }, [])

    function timeSince(date) {
        date = new Date(Date.now() - date);
        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }
    if (Loading) {
        return (
            <center><h1>Loading...</h1></center>
        )
    }
    return (
        <div className="">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <section className="min-h-screen text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className='flex mb-14'>
                        <input value={text} onChange={(e) => { setText(e.target.value) }} type="text" id="name" name="name" className="mx-6 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <button onClick={submitlog} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">save</button>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {mydata && mydata.length > 0 && mydata.length > 0 && mydata.map((i) => {
                            return (
                                <div key={i.id} className="p-4 lg:w-1/3">
                                    <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{i.date.year}-{i.date.month}-{i.date.date} {i.date.day} {timeSince(new Date(Date.now() - i.date.now))} </h2>
                                        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{timeSince(new Date(Date.now() - i.date.now))} ago</h2> */}
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{i.category}</h2>
                                        {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">Ennui Snackwave Thundercats</h1> */}
                                        <p className="leading-relaxed mb-3">{i.data}</p>
                                        <Link href={`/post/${i.id}`} className="text-indigo-400 inline-flex items-center">Read More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                            <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

export async function getServerSideProps(context) {
    let res = await fetch("https://api.shubham1888.repl.co/api/log/get")
    const data = await res.json()
    return {
        props: { data }, // will be passed to the page component as props
    }
}
