// import styles of this component
import styles from "./MasonryBox.module.css"
import { PropTypes } from 'prop-types'
import ModalImage from "react-modal-image";



// MasonryBox component
const MasonryBox = ({ wallSrc, userCity, userCountry }) => {
  return (
    <div className={styles["my-masonry"]}>
        <ModalImage
          small={wallSrc}
          large={wallSrc}
        />
      <div className={`${styles["my-masnry-description"]} flex`}>
        <div className={`${styles["my-masnry-user-box"]} flex align-items-center`}>
          <div className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}>
            <h1>{userCity}</h1>
            <h3>{userCountry}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

// validate MasonryBox component
MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userCity: PropTypes.string.isRequired,
  userCountry: PropTypes.string.isRequired,
}

export default MasonryBox