import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

import banner from "../../assets/Untitled-3.png";
import banner2 from "../../assets/banner2.png";
import Hero from "../../components/Navbar/Hero";
const Carousels = () => (
  <>
    <div className="xs:hidden sm:hidden md:hidden lg:block xl:block relative">
      <Carousel autoplay autoplaySpeed={8000}>
        <div className="relative h-128">
          <div className="absolute inset-0">
            <Image src={banner} alt="Image 1" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="relative h-128">
          <div className="absolute inset-0">
            <Image
              src={banner2}
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </Carousel>

      {/* Search form */}
      <div className="absolute bottom-0 ml-80 m-4 mb-20">
        <div className="text-white text-6xl font-bold mb-4">
          <h1>Pena Pelajar</h1>
        </div>
        <div>
          <h1 className="text-2xl text-gray-100 mb-4">
            Sebuah Aplikasi Website yang diperuntukkan untuk siswa sebagai
            tujuan
            <br />
            <h2>
              Untuk Sharing serta memperkenalkan siswa siswi SMKN 7 BALEENDAH Di
              <br />
              <a>Aplikasi Kita</a>
            </h2>
          </h1>
        </div>
        <button className="btn text-white">Get Started</button>
        <div className="mt-16"></div>
        {/* <form className="flex items-start">
        <input
          type="text"
          placeholder="Cari Artikel"
          className="border rounded-l px-4 py-2 focus:outline-none w-96 "
        />
        <button className="bg-blue-500 text-white rounded-r px-4 py-2">
          Cari
        </button>
      </form> */}
      </div>
    </div>
    <Hero />
  </>
);

export default Carousels;
