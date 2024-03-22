import styles from "./sectionTitle.module.css";

const SectionTitle = ({sectionText}) => {
  return (
    <div className={styles["section-text"]}>{sectionText}</div>
  )
}

export default SectionTitle