"use client";
import React from "react";
import { Card, CardHeader, Image, CardFooter, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
function Kartu({ jurusan, routerPush }) {
  const router = useRouter();
  return (
    <div className="max-w-xs mx-auto">
      <Card
        isPressable
        onPress={() => router.push(routerPush)}
        isFooterBlurred
        radius="sm"
        className="border-none relative"
      >
        <CardHeader>
          <p className="text-center mx-auto">{jurusan}</p>
        </CardHeader>
        <Image
          alt="Woman listening to music"
          className="object-cover rounded-t-lg w-full h-full"
          src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />{" "}
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small z-10">
          <p className="text-tiny text-white/80 mx-2">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20 mx-2 max-w-full"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function JurusanCard() {
  const jurusanData = [
    {
      jurusan: "TKR",
      routerPush: "/jurusan/TKR",
    },
    {
      jurusan: "TAV",
      routerPush: "/jurusan/TAV",
    },
    {
      jurusan: "TKRO",
      routerPush: "/jurusan/TKRO",
    },
    {
      jurusan: "RPL",
      routerPush: "/jurusan/RPL",
    },
    {
      jurusan: "DPIB",
      routerPush: "/jurusan/DPIB",
    },
  ];
  return (
    <>
      <div className="xs:hidden sm:hidden md:hidden lg:block xl:block">
        <div className="m-4 grid grid-cols-3 gap-4  xs:grid-cols-3 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {jurusanData.map(({ jurusan, routerPush }) => (
            <Kartu key={jurusan} jurusan={jurusan} routerPush={routerPush} />
          ))}
        </div>
      </div>
      <div className="xs:block sm:block md:block lg:hidden xl:hidden">
        <div className="m-4 grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {jurusanData.map(({ jurusan, routerPush }) => (
            <Kartu key={jurusan} jurusan={jurusan} routerPush={routerPush} />
          ))}
        </div>
      </div>
    </>
  );
}
