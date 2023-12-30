import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Text,
  Spacer,
  Button,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import SettingProfile from "../DrawerProfile/SettingProfile";
export default function Profile() {
  const router = useRouter();

  const handleEditProfile = () => {
    // Navigasi ke halaman edit profil atau tampilkan modal edit profil
    // Sesuaikan dengan kebutuhan aplikasi Anda
    router.push("/edit-profile");
  };
  return (
    <>
      <div className="card max-w-full bg-base-100 shadow-xl">
        <div className="w-24 rounded mx-auto">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            className="rounded-full"
          />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">qaiduljaisy@gmail.com</h2>
          <p>motto Lorem ipsum dolor sit amet.</p>
          <hr />
          <div className="card-actions max-w-full ">
            <div class="flex flex-wrap justify-center sm:justify-start sm:space-x-6 font-serif p-3 xs:gap-6 ">
              <button className="btn btn-md">Timeline</button>
              <button className="btn btn-md">About</button>
              <button className="btn btn-md">Follower</button>
              <button className="btn btn-md" onClick={() => router.push("/me/edit")}>Edit</button>
            </div>
          </div>
          <SettingProfile />
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
