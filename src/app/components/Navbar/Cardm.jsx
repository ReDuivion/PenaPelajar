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
import { useRouter } from "next/navigation";
export default function Cardm() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  const cards = [
    {
      icon: <RiStackLine size={50} />,
      title: "Kelas",
      color: "bg-sky-500",
      route: "/kelas",
    },
    {
      icon: <RiGalleryView size={50} />,
      title: "Galeri",
      color: "bg-purple-500",
      route: "/galeri",
    },
    {
      icon: <RiBallPenLine size={50} />,
      title: "Pena",
      color: "bg-indigo-500",
      route: "/pena",
    },
    {
      icon: <RiGitRepositoryLine size={50} />,
      title: "Library",
      color: "bg-green-500",
      route: "library",
    },
    {
      icon: <RiFileUserLine size={50} />,
      title: "Profile",
      color: "bg-orange-500",
      route: "/me",
    },
    {
      icon: <RiAddBoxLine size={50} />,
      title: "Posting",
      color: "bg-red-500",
      route: "/post/bikinpost",
    },
  ];

  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <>
      <div className="card bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg p-4">
        <h1 className="text-sm font-bold mb-2">
          Pena Pelajar
          <hr className="border-white my-1" />
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

      <div className="m-2 grid grid-cols-3 gap-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card shadow-xl transition-transform transform hover:scale-105 text-white rounded-lg p-2 ${card.color}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => handleCardClick(card.route)}
          >
            <div className="card-body flex flex-col items-center justify-center h-full">
              {card.icon}
              <div className="card-title mt-2">
                <h1 className="text-white text-md">{card.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
