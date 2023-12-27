"use client";
import React from "react";
import Typical from "react-typical";
import AOS from "aos";
import { useEffect } from "react";
import {
  RiStackLine,
  RiGalleryView,
  RiBallPenLine,
  RiGitRepositoryLine,
  RiFileUserLine,
  RiAddBoxLine,
} from "@remixicon/react";
import Link from "next/link";

export default function Cardm() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="card ">
        <div className="card-body shadow-xl">
          <h1>
            Pena Pelajar
            <br />
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Sebuah Software Yang Dikembangkan Oleh Ngab Adlin",
                10000,
                "Ingfokan Colaborasi",
                5000,
              ]}
            />
          </h1>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="m-4 grid grid-cols-3 gap-4 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6"
      >
        <div className="card bg-sky-500 shadow-xl transition-transform transform hover:scale-105">
          <Link href="/home" className="">
            <div className="card-body">
              <RiStackLine size={60} color="white" />
              <div className="card-title">
                <h1>Kelas</h1>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="card bg-sky-500 shadow-xl transition-transform transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Link href="/home">
            <div className="card-body">
              <RiGalleryView size={60} color="white" />
              <div className="card-title">
                <h1>Galeri</h1>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="card bg-sky-500 shadow-xl transition-transform transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link href="/home">
            <div className="card-body">
              <RiBallPenLine size={60} color="white" />
              <div className="card-title">
                <h1>Pena</h1>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="card bg-green-500 shadow-xl transition-transform transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link href="/home">
            <div className="card-body">
              <RiGitRepositoryLine size={60} color="white" />
              <div className="card-title">
                <h1>Library</h1>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="card bg-orange-500 shadow-xl transition-transform transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link href="/home">
            <div className="card-body">
              <RiFileUserLine size={60} color="white" />
              <div className="card-title">
                <h1>Profile</h1>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="card bg-slate-500 shadow-xl transition-transform transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link href="/home">
            <div className="card-body">
              <RiAddBoxLine size={60} color="white" />
              <div className="card-title">
                <h1>Posting</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
