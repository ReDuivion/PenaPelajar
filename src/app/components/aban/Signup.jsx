import React from "react";

export default function Signup() {
  return (
    <>
      <div>
        <div className="max-w-max mx-auto shadow-xl mt-24">
          <div className="text-center text-gray-600 border-2 px-4 py-4 rounded-lg">
            <div className="text-3xl">Pena Pelajar</div>
            <div className="mt-5 text-gray-500">
              Silahkan Sign-up untuk mendapatkan akses pada aplikasi!
            </div>
            <div className="text-left mt-5 text-gray-600">Email</div>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 rounded-md border-gray-300 w-full mt-2 p-2"
              placeholder="name@company.com"
            ></input>
            <div className="text-left mt-3 text-gray-600">Password</div>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 rounded-md border-gray-300 w-full mt-2 p-2"
              placeholder="Password"
            ></input>
            <div className="text-left mt-3 text-gray-600">
              Register Password
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 rounded-md border-gray-300 w-full mt-2 p-2"
              placeholder="Register Password"
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
            </div>
            <button className="bg-blue-600 w-full text-xl p-1.5 text-white rounded-lg hover:bg-blue-800">
              Sign-up
            </button>
            <div className="font-medium text-gray-500 dark:text-gray-300 mt-2">
              Sudah punya akun?
              <br></br>
              <a
                href="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
