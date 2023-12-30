"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../../config/supabase";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
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
  const [jurusanOptions, setJurusanOptions] = useState([]);
  const [userData, setUserData] = useState({
    jenis_user: "",
    jurusan: "",
    kelas: "",
    nama_user: "",
    avatar: "",
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const router = useRouter();

  async function uploadImage(file, folder) {
    try {
      const { data, error } = await supabase.storage
        .from(folder)
        .upload(file.name, file);

      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error Uploading Image", error.message);
      throw error;
    }
  }

  useEffect(() => {
    const fetchJurusanOptions = async () => {
      try {
        const { data: jurusanData, error: jurusanError } = await supabase
          .from("jurusan")
          .select("id, nama_jurusan");

        if (jurusanError) {
          console.error(
            "Error fetching jurusan options:",
            jurusanError.message
          );
        } else {
          setJurusanOptions(jurusanData);
        }
      } catch (error) {
        console.error("Error fetching jurusan options:", error.message);
      }
    };

    fetchJurusanOptions();
  }, []);
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

          const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("email", user.email)
            .single();
            console.log(data)

          if (error) {
            console.error("Error fetching user data:", error.message);
          } else {
            setUserData(data || {});
            console.log(data)

            const res = await supabase.storage
              .from("gambar")
              .getPublicUrl(data.avatar);

            if (res.error) {
              console.error("Error fetching avatar URL:", res.error.message);
            } else {
              setAvatarUrl(res.data.publicUrl);
              console.log(data);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];

    try {
      const folder = "gambar";
      const filename = `${uuidv4()}-${file.name}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(folder)
        .upload(`${filename}`, file);

      if (uploadError) {
        throw uploadError;
      }

      setUserData((prevData) => ({
        ...prevData,
        avatar: filename,
      }));

      setAvatarUrl(uploadData.publicURL);
    } catch (error) {
      console.error("ERROR UPLOADING AVATAR", error.message);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedFields = {};

    if (userData.avatar) {
      updatedFields.avatar = userData.avatar;
    }

    if (userData.jenis_user !== "") {
      updatedFields.jenis_user = userData.jenis_user;
    }

    if (userData.jurusan !== "") {
      // Find the selected jurusan object
      const selectedJurusan = jurusanOptions.find(
        (jurusan) => jurusan.nama_jurusan === userData.jurusan
      );

      // If the jurusan is found, update the jurusan_id
      if (selectedJurusan) {
        updatedFields.jurusan_id = selectedJurusan.id;
      }
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
      const { data: updatedUserData, error: fetchUserError } = await supabase
        .from("profiles")
        .select("*")
        .eq("email", userEmail)
        .single();

      if (fetchUserError) {
        console.error(
          "Error fetching updated user data:",
          fetchUserError.message
        );
      } else {
        setUserData(updatedUserData || {});

        const { data, error } = await supabase.storage
          .from("gambar")
          .getPublicUrl(updatedUserData.avatar);

        if (error) {
          console.error(
            "Error fetching updated avatar URL:",
            avatarError.message
          );
        } else {
          setAvatarUrl(data.publicUrl);
          console.log(data);
        }
      }
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
              <img
                src={
                  avatarUrl || "https://images4.alphacoders.com/127/1276963.png"
                }
              />
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
              <h1>Jurusan</h1>
              <select
                name="jurusan"
                value={userData.jurusan}
                onChange={handleInputChange}
                className="select select-primary w-full max-w-full select-sm"
              >
                <option disabled selected>
                  Pilih Jurusan
                </option>
                {jurusanOptions.map((option) => (
                  <option key={option.id} value={option.nama_jurusan}>
                    {option.nama_jurusan}
                  </option>
                ))}
              </select>

              <h1>Kelas</h1>
              <input
                type="text"
                name="kelas"
                value={userData.kelas}
                onChange={handleInputChange}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="file"
                name="avatar"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={handleAvatarChange}
              />
              <Button
                color="danger"
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
