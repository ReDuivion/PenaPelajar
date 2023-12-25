// pages/me/edit.jsx
"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../../config/supabase";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import {
  faCoffee,
  faGear,
  faUser,
  faUserGroup,
  faMagnifyingGlass,
  faPlus,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

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
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
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

    const updatedFields = {};

    if (userData.jenis_user !== "") {
      updatedFields.jenis_user = userData.jenis_user;
    }
    if (userData.jurusan !== "") {
      updatedFields.jurusan = userData.jurusan;
    }
    if (userData.kelas !== "") {
      updatedFields.kelas = userData.kelas;
    }
    if (userData.nama_user !== "") {
      updatedFields.nama_user = userData.nama_user;
    }

    // Update user data in the "profiles" table
    const { error } = await supabase
      .from("profiles")
      .update(updatedFields)
      .eq("email", userEmail);

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
      <div class="card w-96 bg-base-100 shadow-xl mx-auto ">
        <div class="card-body">
          <h2 class="card-title mx-auto">
            Edit Profile <FontAwesomeIcon icon={faPenToSquare} />
          </h2>
          <hr />
          <div class="avatar">
            <div class="w-24 rounded-full mx-auto">
              <img src="https://images4.alphacoders.com/127/1276963.png" />
            </div>
          </div>

          <p className="text-center">{userEmail}</p>
          <div class="card-actions justify-end">
            <form onSubmit={handleFormSubmit}>
              <h1>Nama User:</h1>
              <input
                type="text"
                name="nama_user"
                value={userData.nama_user}
                onChange={handleInputChange}
                className="input input-bordered w-full max-w-xs"
              />

              <br />
              <h1>Pilih User</h1>
              <select
                name="jenis_user"
                value={userData.jenis_user}
                onChange={handleInputChange}
                className="select select-primary w-full max-w-full select-sm"
              >
                <option disabled selected>
                  Pilih User
                </option>
                <option>Siswa</option>
                <option>Guru/Staff</option>
                <option>Kepala Sekolah</option>
              </select>
              <br />

              <h1>Jurusan:</h1>
              <input
                type="text"
                name="jurusan"
                value={userData.jurusan}
                onChange={handleInputChange}
                className="input input-bordered w-full max-w-xs"
              />

              <h1>Kelas</h1>
              <input
                type="text"
                name="kelas"
                value={userData.kelas}
                onChange={handleInputChange}
                className="input input-bordered w-full max-w-xs"
              />

              <Button
                color="primary"
                className="ml-20 mt-4"
                variant="solid"
                type="submit"
              >
                Simpan Perubahan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
