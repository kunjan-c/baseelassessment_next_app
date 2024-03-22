"use client"
import { useEffect, useState } from 'react';
import styles from "./userForm.module.css";
import Link from 'next/link';
import SectionTitle from '../sectionTitle/sectionTitle';

const UserForm = ({ onFormSubmit, formText }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });


  //Handle Form Input Cahnge
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onFormSubmit(formData);

    }
  };


  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.role = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  return (
    <div className={styles["form-container"]}>
      <Link href="/"><div className={styles["close-icon"]}>&times;</div></Link>
      <SectionTitle sectionText="Create New User"></SectionTitle>
      <form onSubmit={handleSubmit}>

        <div className={styles["user-creation-form-group"]}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.username} onChange={handleChange} />
          {errors.name && <div className={styles["error"]}>{errors.username}</div>}
        </div>
        <div className={styles["user-creation-form-group"]}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className={styles["error"]}>{errors.email}</div>}
        </div>
        <div className={styles["user-creation-form-group"]}>
          <label htmlFor="message">Message:</label>
          <textarea type="text" id="message" name="message" value={formData.message} onChange={handleChange} />
          {errors.message && <div className={styles["error"]}>{errors.message}</div>}
        </div>
        <div className={styles["position-center"]}>
          <button type="submit" className={styles["user-create-sub-btn"]}>{formText === "Update User" ? "Update" : "Create"}  </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;