// import styles of this component
import styles from "./Nav.module.css"

// import other react pkg to use
import { HambergerMenu, Instagram, SmsEdit, MenuBoard } from "iconsax-react"
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Popup from 'reactjs-popup'


// Nav component
const Nav = () => {
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
            </ul >
            <div className={styles["navbar-responsive-menu"]}>
                <HambergerMenu size="32" color="var(--white-100)" />
            </div>
        </nav >
    )
}

export default Nav