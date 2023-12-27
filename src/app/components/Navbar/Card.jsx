import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import {
  RiHeartFill,
  RiPagesLine,
  RiGalleryView,
  RiMessage2Fill,
} from "@remixicon/react";
export default function Card() {
  return (
    <>
      <div className="">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="shadow-xl">
              <div className="card  lg:w-80 xl:w-96 bg-base-100 mx-auto gap-4">
                <div className="card-body">
                  <div className="card-title flex">
                    <button className="btn btn-md btn-circle shadow-xl">
                      <RiPagesLine size={30} color="gray" />
                    </button>
                  </div>

                  <hr />
                  <div className="flex-wrap">
                    <h1 className="font-bold text-xl">Website</h1>
                    <h2 className="text-md">
                      Setiap kelas memiliki Page tersendiri dengan URL
                      berdasarkan nama kelasnya. Website tersebut sudah
                      diintegrasikan dan dapat diatur oleh guru atau ketua
                      kelas.
                    </h2>
                  </div>

                  <div className="card-actions justify-end">
                    {/* Your card actions go here */}
                    <button className="btn">View More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-xl">
              <div className="card  lg:w-80 xl:w-96 bg-base-100  mx-auto">
                <div className="card-body">
                  <div className="card-title flex">
                    <button className="btn btn-md btn-circle shadow-xl">
                      <RiGalleryView size={30} color="gray" />
                    </button>
                  </div>

                  <hr />
                  <div className="flex-wrap">
                    <h1 className="font-bold text-xl">Galeri</h1>
                    <h2 className="text-md">
                      Kalian Bisa Mensharing Image Atau Galleri Kalian Di
                      Aplikasi Pena Pelajar, Seperti Social Media Pada Umumnya
                      yang bisa diakses oleh banyak orang
                    </h2>
                  </div>

                  <div className="card-actions justify-end">
                    {/* Your card actions go here */}
                    <button className="btn">View More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-xl">
              <div className="card lg:w-80  xl:w-96 bg-base-100  mx-auto">
                <div className="card-body">
                  <div className="card-title flex">
                    <button className="btn btn-md btn-circle shadow-xl">
                      <RiMessage2Fill size={30} color="gray" />
                    </button>
                  </div>

                  <hr />
                  <div className="flex-wrap">
                    <h1 className="font-bold text-xl">RealTime Chatting</h1>
                    <h2 className="text-md">
                      Kalian Bisa Mengirimkan Pesan Kepada Bebeb Kalian Jika
                      Kalian Sudah Berteman Lewat UID yang nanti bisa ditentukan
                      atau muncul di Landing Page
                    </h2>
                  </div>

                  <div className="card-actions justify-end">
                    {/* Your card actions go here */}
                    <button className="btn">View More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the above card structure for the other cards */}
          </div>
        </div>
      </div>
    </>
  );
}
