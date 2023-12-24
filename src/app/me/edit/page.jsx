// pages/me/edit.jsx
'use client'
import React, { useState, useEffect } from "react";
import { supabase } from "../../config/supabase";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const [userEmail, setUserEmail] = useState(null);
  const [userData, setUserData] = useState({
    jenis_user: "",
    jurusan: "",
    kelas: "",
    nama_user: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
          console.error("Error fetching user:", error.message);
        } else {
          setUserEmail(user.email);

          const { data: userData, error: userError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

          if (userError) {
            console.error("Error fetching user data:", userError.message);
          } else {
            setUserData(userData || {});
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Update user data in the "profiles" table
    const { error } = await supabase.from("profiles").upsert([
      {
        jenis_user: userData.jenis_user,
        jurusan: userData.jurusan,
        kelas: userData.kelas,
        nama_user: userData.nama_user,
        email: userEmail,
      },
    ]);

    if (error) {
      console.error("Error updating user data:", error.message);
    } else {
      console.log("User data updated successfully");
      router.push("/me");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <p>Email: {userEmail}</p>

      <form onSubmit={handleFormSubmit}>
        <label>
          Jenis User:
          <input
            type="text"
            name="jenis_user"
            value={userData.jenis_user}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Jurusan:
          <input
            type="text"
            name="jurusan"
            value={userData.jurusan}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Kelas:
          <input
            type="text"
            name="kelas"
            value={userData.kelas}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Nama User:
          <input
            type="text"
            name="nama_user"
            value={userData.nama_user}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Simpan Perubahan</button>
      </form>
    </div>
  );
}
