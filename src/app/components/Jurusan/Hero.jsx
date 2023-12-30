"use client";
// components/HeroSection.js
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Typed from "react-typed";
import Typical from "react-typical";

const JurusanLoopingText = () => {
  const jurusanList = ["TKR", "TAV", "TKRO", "RPL", "DPIB"];

  const options = {
    strings: jurusanList,
    typeSpeed: 50, // Kecepatan mengetik (ms per karakter)
    backSpeed: 25, // Kecepatan menghapus (ms per karakter)
    backDelay: 2000, // Jeda setelah menghapus (ms)
    loop: true, // Mengulangi animasi
  };

  return <Typed {...options} />;
};

const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Jurusan di SMKN 7 BALEENDAH</h1>

        <p className="text-lg mb-8">
          Temukan dan pelajari berbagai jurusan yang tersedia di sini.
        </p>
        <div className=" justify-center">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-100">
            List Jurusan:
          </button>
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-4xl mt-5"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1 }}
          >
            <JurusanLoopingText />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
