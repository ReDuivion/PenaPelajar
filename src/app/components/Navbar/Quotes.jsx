import React from "react";
import Image from "next/image";
export default function Quotes() {
  return (
    <>
      <div className="m-8 mt-20">
        <div className="flex justify-between">
          <h1 className=" text-3xl font-sans text-sky-600 font-semibold">
            Galeri
          </h1>
          <button className="btn btn-md">Lihat Lebih Lanjut</button>
        </div>
        <hr className="my-4 border-t-2 border-gray-300" />
      </div>
      <div className="grid grid-cols-3">
        <Image
          src="https://dummyimage.com/600x400/000/fff"
          width={320}
          height={150}
        />
        <Image
          src="https://dummyimage.com/600x400/000/fff"
          width={320}
          height={150}
        />
        <Image
          src="https://dummyimage.com/600x400/000/fff"
          width={320}
          height={150}
        />
      </div>
    </>
  );
}
