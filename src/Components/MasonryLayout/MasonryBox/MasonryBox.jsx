// import styles of this component
import styles from "./MasonryBox.module.css"
import { PropTypes } from 'prop-types'
import ModalImage from "react-modal-image";



// MasonryBox component
const MasonryBox = ({ wallSrc, userName, userJob }) => {
  return (
    <div className={styles["my-masonry"]}>
        <ModalImage
          small={wallSrc}
          large={wallSrc}
          alt={userName}
        />
      <div className={`${styles["my-masnry-description"]} flex`}>
        <div className={`${styles["my-masnry-user-box"]} flex align-items-center`}>
          <div className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}>
            <h1>{userName}</h1>
            <h3>{userJob}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

// validate MasonryBox component
MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userJob: PropTypes.string.isRequired,
}

export default MasonryBox