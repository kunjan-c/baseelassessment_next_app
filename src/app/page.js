"use client";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";



export default function Home() {
  const [userListdata, setUserListdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserlistData()
  }, [])

  const fetchUserlistData = async () => {
    try {
      setIsLoading(true)
      const result = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await result?.json()
      if (data) {
        setUserListdata(data)
      }
      console.log(data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }

  }

  return (
    <>
      <Header></Header>

      {
        isLoading ? <div>Loading...</div> :
          userListdata.length > 0 &&

          userListdata?.map((data, i) => {
            return (<div key={data.id} className={styles["boxcard-container"]} >
              <div className={styles["detail-row-container"]}>
                <div className={styles["card-label"]} >Name : </div>
                <div className={styles["card-label-value"]} >{data.name}</div>
              </div>
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

    </>
  );
}
