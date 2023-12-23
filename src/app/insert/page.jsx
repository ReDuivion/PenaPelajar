"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../config/supabase";
import Berhasil from "../components/Toast/Berhasil";
import MainNavbar from "../components/MainNavbar";


const AddRowForm = () => {
  const [updateNamaUser, setUpdatedNamaUser] = useState("");
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    nama_user: "",
    jenis_user: "",
  });

  const fetchData = async () => {

    try {
      const { data, error } = await supabase.from("profiles").select("*");
      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setData(data);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    // Ambil data saat komponen dimuat
    fetchData();

    // Set interval untuk HTTP polling setiap beberapa detik
    const interval = setInterval(fetchData, 2000); // Ganti sesuai kebutuhan polling interval (dalam milidetik)

    // Bersihkan interval saat komponen dilepas (unmount)
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function updateData(id) {
    try{

      const { error } = await supabase
      .from("profiles")
      .update({ nama_user: updateNamaUser })
      .eq("id", id);
      
      if(error) {
        console.error("Error", error.message)
      } else{
        console.log("ROW DI UPDATE", updateNamaUser)
        fetchData()
        setUpdatedNamaUser("")
      }
    } catch(error) {
      console.error("error", error.message)
    }
  }
  async function deletes(id) {
    try {
      const { error } = await supabase.from("profiles").delete().eq("id", id);

      if (error) {
        console.error("Error", error.message);
      } else {
        console.log("Berhasil Delete", data);
        fetchData();
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tableName = "profiles";

    try {
      // Menambahkan baris ke tabel
      const { data, error } = await supabase.from(tableName).insert([formData]);

      if (error) {
        console.error("Error inserting row:", error.message);
      } else {
        console.log("Row inserted successfully:", data);
        // Reset formulir setelah berhasil menambahkan baris
        setFormData({
          nama_user: "",
          jenis_user: "",
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
    <Berhasil/>
      <form onSubmit={handleSubmit}>
        <label>
          Nama User:
          <input
            type="text"
            name="nama_user"
            value={formData.nama_user}
            onChange={handleChange}
          />
        </label>
        <label>
          Jenis User:
          <input
            type="text"
            name="jenis_user"
            value={formData.jenis_user}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Tambahkan Baris</button>
      </form>
      <div>
        <h1>Data</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {JSON.stringify(item)}
              <button onClick={() => deletes(item.id)}>Delete</button>
              <input
                type="text"
                name="updateNamaUser"
                value={updateNamaUser}
                onChange={(e) => setUpdatedNamaUser(e.target.value)}
              ></input>
            <button onClick={() => updateData(item.id)}>Update</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddRowForm;
