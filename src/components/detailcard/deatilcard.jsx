
import styles from "./detailCard.module.css";
import SectionTitle from "../sectionTitle/sectionTitle";
import Link from "next/link";

const Deatilcard = ({ userDetail ,title}) => {
    return (
        <div className={styles["user-detail-container"]}>
            <div className={styles["close-icon"]}> <Link href="/" scroll={false}>&times;</Link></div>
            <SectionTitle  sectionText={title}></SectionTitle>
      
            <div className={styles["user-detail-content"]}>

                <div className={styles["user-detail-content-label"]} >Name: </div>
                <div className={styles["user-detail-content-label-value"]} >{userDetail?.name}</div>
            </div>
            <div className={styles["user-detail-content"]}>

                <div className={styles["user-detail-content-label"]} >Email: </div>
                <div className={styles["user-detail-content-label-value"]} >{userDetail?.email}</div>
            </div>
            <div className={styles["user-detail-content"]}>

                <div className={styles["user-detail-content-label"]} >Website: </div>
                <div className={styles["user-detail-content-label-value"]} >{userDetail?.website}</div>
            </div>

        </div>
    )
}

export default Deatilcard