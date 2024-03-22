"use client"
import Header from '@/components/header/header'
import UserForm from '@/components/userForm/userForm'
import React from 'react'

const About = () => {
  const handleSubmit = (formData) => {
   console.log(formData)
  
  };
  return (
    <>
    <Header></Header>
    <div>
    <UserForm onFormSubmit={handleSubmit} formText="Create New User"></UserForm>
    </div>
    
    </>
   
  )
}

export default About