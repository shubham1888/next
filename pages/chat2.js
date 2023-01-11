import React, { useEffect, useState } from 'react'
// import styles from "../styles/chat.module.css"

const Chat = () => {
  const [text, setText] = useState("")
  return (
    // <div className={styles.body}>
    //   <div className={styles.chatlistwrapper}></div>

    //   <div className={styles.chatwrapper}>
    //     <div id="chat-box" className={styles.chatbox}>
    //       <div className={styles.chatmessage}>
    //         <div></div>
    //         <div className={styles.messageuser}>
    //           <div className={styles.usertime}>
    //             <span id="username" data-username="JohnDoe" className={styles.username}>JohnDoe</span>
    //             <span className={styles.messagetime}>1:35 PM</span>
    //           </div>
    //           <span className={styles.messagecontent}>Testing.</span>
    //         </div>
    //         <div></div>
    //         <div className={styles.messageuser}>
    //           <div className={styles.usertime}>
    //             <span id="username" data-username="shubham" className={styles.username}>shubham</span>
    //             <span className={styles.messagetime}>1:35 PM</span>
    //           </div>
    //           <span className={styles.messagecontent}>hello.</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className={styles.formwrapper}>
    //       <form id="message-form" className={styles.messageform}>
    //         <input type="text" name="message" placeholder="Send a message..." className={styles.message} id="message" />
    //         <button type="submit" name="send" className={styles.send} id="send">
    //           Send
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>


    <div>
      <section className="min-h-screen text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">Shubham</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                {/* <h2 className="text-2xl font-medium text-white title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2> */}
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              </div>
            </div>
            <div className="container px-5 py-6 mx-auto bottom-0 fixed">
              <div className='flex mb-6'>
                <input value={text} onChange={(e) => { setText(e.target.value) }} type="text" id="name" name="name" className="mx-6 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">save</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Chat