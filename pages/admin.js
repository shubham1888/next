import React, { useState, useEffect } from 'react'
// import Sidebar from './components/sidebar'
// import styles from "../styles/sidebar.module.css"
import Nothing from './components/nothing'

const Admin = () => {
    const [sidebarcontent, setSidebarcontent] = useState("home")
    return (
        <div>
            {/* <div><Sidebar sidebarcontent={sidebarcontent} /></div>
            <div className={styles.content}>
                {sidebarcontent==="home"?<Home />:<Nothing />}
            </div> */}
            <Nothing />
        </div>
    )
}

export default Admin