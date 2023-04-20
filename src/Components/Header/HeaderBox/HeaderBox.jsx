// import styles this component
import styles from "./HeaderBox.module.css"

// import react package
import PropTypes from 'prop-types'

// HeaderBox component
const HeaderBox = ({ desc, title, border_right=true }) => (
    <div className={`${styles["header-box"]} ${border_right && styles["active-border-right"]} flex flex-column`}>
        <h1>{ title }</h1>
        <h3>{ desc }</h3>
    </div>
)

HeaderBox.propTypes = {
    desc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    border_right: PropTypes.bool
}

export default HeaderBox