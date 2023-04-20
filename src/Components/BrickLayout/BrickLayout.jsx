import styles from "./BrickLayout.module.css"

const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src="img/dummy_image/1.png" alt="" />
        <img src="img/dummy_image/2.png" alt="" />
        <img src="img/dummy_image/3.png" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/dummy_image/4.png" alt="" />
        <img src="img/dummy_image/5.png" alt="" />
        <img src="img/dummy_image/6.png" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/dummy_image/7.png" alt="" />
        <img src="img/dummy_image/8.png" alt="" />
        <img src="img/dummy_image/9.png" alt="" />
      </div>
    </div>
  )
}

export default BrickLayout