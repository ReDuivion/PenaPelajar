"use client";
// Ensure to use 'useRouter' from 'next/navigation'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { supabase } from "../../config/supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Login = () => {
  const router = useRouter(); // Use 'useRouter' from 'next/navigation'
  const [getUser, setGetUser] = useState({
    email: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (getUser.password !== getUser.password) {
      toast.error("GAGAL");
      setIsSubmit(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: getUser.email,
        password: getUser.password,
      });

      if (error) {
        toast.error("Gagal, " + error.message);
      } else {
        toast.success("Berhasil");

        setTimeout(() => {
          router.push("/me");
        }, 3000);
        // Use 'router.push' for redirection
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <>
      <div>
        <div className="max-w-max mx-auto shadow-xl mt-24">
          <div className="text-center text-gray-600 border-2 px-4 py-4 rounded-lg">
            <div className="text-3xl mb-3">Pena Pelajar</div>
            <hr/>
            <div className="mt-5 text-gray-500">
              Silahkan Login terlebih dahulu untuk mengakses aplikasi
            </div>
            <form onSubmit={handleSubmit}>
              <div className="text-left mt-5 text-gray-600">Email</div>
              <input
                type="text"
                name="email"
                value={getUser.email}
                className="border-2 rounded-md border-gray-300 w-full mt-2 p-2"
                placeholder="name@company.com"
                onChange={(e) =>
                  setGetUser({ ...getUser, email: e.target.value })
                }
              ></input>
              <div className="text-left mt-3 text-gray-600">Password</div>
              <input
                type="password"
                name="password"
                value={getUser.password}
                onChange={(e) =>
                  setGetUser({ ...getUser, password: e.target.value })
                }
                className="border-2 rounded-md border-gray-300 w-full mt-2 p-2"
                placeholder="Password"
              ></input>

              <div className="flex items-start my-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-5 w-5 rounded-xl   dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                ></input>
                <div class="ml-3">
                  <a className="ml-auto dark:text-white">Ingat saya</a>
                </div>
                <a
                  href="#"
                  className="text-blue-700 hover:underline ml-auto dark:text-blue-500"
                >
                  Lupa Password?
                </a>
              </div>
              <button
                type="submit"
                className="btn bg-blue-600 w-full text-xl p-1.5 text-white rounded-lg hover:bg-blue-800"
              >
                Login
              </button>
            </form>
            <div className="font-medium text-gray-500 dark:text-gray-300 mt-2">
              Belum punya akun?
              <br></br>
              <Link
                href="/signup"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
