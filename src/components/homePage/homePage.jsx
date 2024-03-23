
import Link from "next/link";
import styles from "./homePage.module.css";
import Header from "@/components/header/header";
import SectionTitle from "@/components/sectionTitle/sectionTitle";
import ContentWrapper from "@/components/contentWrapper/contentWrapper";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


export default async function HomePageContent() {
  const users = await getData()

  return (
    <>
      <Header></Header>
      <ContentWrapper>
        <SectionTitle sectionText="User List"></SectionTitle>
        {
          users?.map((data, i) => {
            return (

              <div key={data.id} className={styles["boxcard-container"]} >

                <Link className={styles["view-detail-text"]} href={`/${data.id}`}>View Detail</Link>

                <Link  href={`/${data.id}`}>
                  <div className={styles["detail-row-container"]}>
                    <div className={styles["card-label"]} >Name: </div>
                    <div className={styles["card-label-value"]} >{data.name}</div>
                  </div>
                </Link>
                <div className={styles["detail-row-container"]}>

                  <div className={styles["card-label"]}>Email: </div>
                  <div className={styles["card-label-value"]}>{data.email}</div>
                </div>
                <div className={styles["detail-row-container"]}>

                  <div className={styles["card-label"]} >Website: </div>
                  <div className={styles["card-label-value"]} >{data.website}</div>
                </div>
              </div>)
          })




        }

      </ContentWrapper>
    </>
  );
}
