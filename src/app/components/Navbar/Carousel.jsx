import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import reisen from "../../assets/558877.jpg";
import pohon from "../../assets/photo-1703217889032-c951a2934609.jpeg";
import banner from "../../assets/Untitled-3.png";
const Carousels = () => (
  <div className="xs:hidden sm:hidden md:hidden lg:hidden xl:block relative">
    <Carousel autoplay autoplaySpeed={10000}>
      <div className="relative h-128">
        <div className="absolute inset-0">
          <Image
            src="https://dummyimage.com/600x400/"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="relative h-128">
        <div className="absolute inset-0">
          <Image src={banner} alt="Image 2" layout="fill" objectFit="cover" />
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
          Sebuah Aplikasi Website yang diperuntukkan untuk siswa sebagai tujuan
          <br />
          <h1>
            Untuk Sharing serta memperkenalkan siswa siswi SMKN 7 BALEENDAH Di
            <br />
            <a>Aplikasi Kita</a>
          </h1>
        </h1>
      </div>
      <form className="flex items-start">
        <input
          type="text"
          placeholder="Cari Artikel"
          className="border rounded-l px-4 py-2 focus:outline-none w-96 "
        />
        <button className="bg-blue-500 text-white rounded-r px-4 py-2">
          Cari
        </button>
      </form>
    </div>
  </div>
);

export default Carousels;
