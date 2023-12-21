'use client'
import React, { useState } from 'react';
import { supabase } from '../config/supabase';

const AddRowForm = () => {
  const [formData, setFormData] = useState({
    nama_user: '',
    jenis_user: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tableName = 'profiles';

    try {
      // Menambahkan baris ke tabel
      const { data, error } = await supabase
        .from(tableName)
        .insert([formData]);

      if (error) {
        console.error('Error inserting row:', error.message);
      } else {
        console.log('Row inserted successfully:', data);
        // Reset formulir setelah berhasil menambahkan baris
        setFormData({
          nama_user: '',
          jenis_user: '',
          // Reset kolom-kolom lain sesuai kebutuhan
        });
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
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
        {/* Tambahkan input untuk kolom-kolom lain sesuai kebutuhan */}
        <button type="submit">Tambahkan Baris</button>
      </form>
    </>
  );
};

export default AddRowForm;
