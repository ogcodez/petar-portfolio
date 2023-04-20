// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// import something from react packages
import { Camera, PenTool, Instagram, SmsEdit, } from "iconsax-react";

// import jsons
import JsonHeader from '../../Jsons/HeaderBoxes.json';

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
      <ContainerCard className="flex flex-column">
        <div className={styles["blur-circle-shape"]}></div>

        <Nav />
        <BrickLayout />

        <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
          <h1 className={styles["heading-header-second-title"]}>
            Petar Divac
            <br />
            <span style={{ paddingRight: '10px' }}>Creator</span>
            <Camera size="32" color="#FF8A65" variant="Bulk" />
            <PenTool size="32" color="#FF8A65" variant="Bulk" />
          </h1>

          {/* <div className={`${styles["search-bar"]} flex align-items-center`}>
              <input type="text" className={styles["search-input"]} placeholder="Send me an email" />
              <button className={`${styles["search-btn"]} flex justify-content-center align-items-center`}>
              <Send size="32" color="#FF8A65"/>
              </button>
            </div> */}

          <HeaderBoxes titles_numbers={JsonHeader.informations} />
          <br />
        </div>
      </ContainerCard>
    </header>
  )
}

export default Header