import Image from "next/image";
import Carousel from "./components/Navbar/Carousel";

import Card from "./components/Navbar/Card";
import Cardm from "./components/Navbar/Cardm";
export default function Home() {
  return (
    <>
      <div className="xs:hidden sm:hidden md:hidden lg:block xl:block">
        <Carousel />
        <Card />
      </div>
      <div className="xs:block sm:block md:block lg:hidden xl:hidden">
        <Cardm />
      </div>
    </>
  );
}
