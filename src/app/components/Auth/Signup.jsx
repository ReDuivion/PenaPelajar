'use client'
import React, { useState } from "react";
import { supabase } from "../../config/supabase.js";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [tambahUsers, setTambahUsers] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setTambahUsers({ ...tambahUsers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isSubmitting) {
      return;
    }
  
    setIsSubmitting(true);
  
    if (tambahUsers.password !== tambahUsers.password2) {
      toast.error("Gagal, Password/Email Tidak Sama");
      setIsSubmitting(false);
      return;
    }
  
    try {
      const { data, error } = await supabase.auth.signUp({
        email: tambahUsers.email,
        password: tambahUsers.password,
      });
  
      if (error) {
        toast.error("Gagal, " + error.message);
      } else {
        toast.success("Berhasil");
        redirect("/login");
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={tambahUsers.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={tambahUsers.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          value={tambahUsers.password2}
          onChange={handleChange}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Signup"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Signup;
