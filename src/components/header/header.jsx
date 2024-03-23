
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
    const headerOptions = [
        {
            title: "Home",
            id: "home",
            link : "/"
           
        },
        {
            title: "About",
            id: "about",
            link : "/about"
        },

    ]
    return (
        <div className={styles["header-container"]}>
        {
        
            headerOptions.length && headerOptions.map((op )=> 
                <div className={styles["header-options"]} id={op.id} key={op.id}  ><Link href={op.link} scroll={false}>{op.title}</Link></div>

            )

}
        </div>
    )
}

export default Header