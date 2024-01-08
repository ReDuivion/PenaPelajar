'use client'
// Ensure to use 'useRouter' from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { supabase } from '../../config/supabase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const router = useRouter(); // Use 'useRouter' from 'next/navigation'
  const [getUser, setGetUser] = useState({
    email: '',
    password: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (getUser.password !== getUser.password) {
      toast.error('GAGAL');
      setIsSubmit(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: getUser.email,
        password: getUser.password,
      });

      if (error) {
        toast.error('Gagal, ' + error.message);
      } else {
        toast.success('Berhasil');

        

        // Use 'router.push' for redirection
        router.push('/me');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={getUser.email}
          onChange={(e) => setGetUser({ ...getUser, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          value={getUser.password}
          onChange={(e) => setGetUser({ ...getUser, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
