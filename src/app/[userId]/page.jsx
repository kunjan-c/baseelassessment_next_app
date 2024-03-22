"use client";
import ContentWrapper from '@/components/contentWrapper/contentWrapper';
import Deatilcard from '@/components/detailcard/deatilcard';
import Header from '@/components/header/header';
import React, { useEffect, useState } from 'react'
const UserDetails = ({ params }) => {

  const [userDetail, setUserDetail] = useState(null)
  let userId = params.userId;

  useEffect(() => {
    getUserSpecifiDetail()
  }, [userId])

  const getUserSpecifiDetail = async () => {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let userData = await userResponse.json();
    console.log(userData);
    setUserDetail(userData)
  }

  return (
    <>
      <Header></Header>
      <ContentWrapper>
        {userDetail && <Deatilcard userDetail={userDetail} title="User Detail"></Deatilcard>}
      </ContentWrapper>
    </>



  )
}

export default UserDetails