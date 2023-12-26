"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGear,
  faUser,
  faUserGroup,
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../../config/supabase"; // Sesuaikan dengan lokasi file konfigurasi Supabase
import Link from "next/link";

export default function SettingProfile() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) {
          console.error("Error fetching user:", error.message);
        } else {
          setUserEmail(user.email);
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUserEmail();
  }, []);

  return (
    <div className="drawer drawer-end border border-gray-300">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
          Open drawer
        </label>
      </div>
      <div className="drawer-side border-l border-gray-300">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content border-r border-gray-300">
          {/* Sidebar content here */}
          <button className="btn btn-sm text-center">
            <Link href="/me/edit">Edit Profile</Link>
            <FontAwesomeIcon icon={faGear} className="1x" size="" />
          </button>

          <hr />

          <div className="avatar mx-auto mt-6">
            <div className="w-24 rounded-full">
              <img src="https://images4.alphacoders.com/127/1276963.png" alt="Profile Avatar" />
            </div>
          </div>
          <h1 className="text-center text-xl mt-2 mb-4">{userEmail}</h1>

          <hr />

          <button className="btn btn-sm max-w-full">
            <FontAwesomeIcon icon={faUser} className="mr-2" size="" />
            Profile
          </button>
          <button className="btn btn-sm max-w-full mt-2">
            <FontAwesomeIcon icon={faUserGroup} className="mr-2" size="" />
            Teman Saya
          </button>
          <button className="btn btn-sm max-w-full mt-2">
            <FontAwesomeIcon icon={faSearch} className="mr-2" size="" />
            History Komen
          </button>
          <button className="btn btn-sm max-w-full mt-2">
            <FontAwesomeIcon icon={faPlus} className="mr-2" size="" />
            Buat Postingan
          </button>
        </ul>
      </div>
    </div>
  );
}
