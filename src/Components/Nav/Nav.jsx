// import styles of this component
import styles from "./Nav.module.css"
import React from 'react'
// import other react pkg to use
import { Instagram, SmsEdit, MenuBoard, ArrowUp3 } from "iconsax-react"
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Hamburger from 'hamburger-react'
import 'react-dropdown/style.css'
import { useState } from 'react'


// Nav component
const Nav = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <nav className={`${styles.nav} flex align-items-center`}>
            <MenuBoard size="24" color="#FF8A65" variant="Bulk" />
            <h1 className={styles["nav-title"]}>Portfolio</h1>
            <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <a href="#main" className={`${styles["nav-item"]} ${styles.active}`}>Images</a>
                </li>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <Tooltip title="divacph@gmail.com">
                        <IconButton>
                            <SmsEdit size="34" color="#FF8A65" variant="Bulk" />
                        </IconButton>
                    </Tooltip>
                </li>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <div className={`${styles["lin"]}`}>
                        <a href="https://www.linkedin.com/in/petar-divac-53a94b26b/">in</a>
                    </div>
                </li>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <a href="https://www.instagram.com/divacph/">
                        <Instagram size="34" color="#FF8A65" variant="Bulk" />
                    </a>
                </li>
            </ul>
            <div className={`${styles["dd"]}`}>
                <Hamburger color="#FF8A65" toggled={isOpen} toggle={setOpen} rounded />
                {isOpen && <ul className={`${styles["ddUl"]}`}>
                    <li>
                        
                            <SmsEdit onClick={() => window.location = 'mailto:divacph@gmail.com'} size="34" color="#FF8A65" variant="Bulk" />
                            
                    </li>
                    <li>
                        <div className={`${styles["lin"]}`}>
                            <a href="https://www.linkedin.com/in/petar-divac-53a94b26b/">in</a>
                        </div>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/divacph/">
                            <Instagram size="34" color="#FF8A65" variant="Bulk" />
                        </a>
                    </li>
                </ul>}
            </div>
        </nav>
    )
}

export default Nav