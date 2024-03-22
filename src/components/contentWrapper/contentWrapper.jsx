
import styles from "./contentWrapper.module.css";
const ContentWrapper = ({children}) => {
  return (
    <div className={styles["wrapper-container"]}>{children}</div>
  )
}

export default ContentWrapper