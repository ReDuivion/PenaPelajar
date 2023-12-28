import Image from "next/image";
import Carousel from "./components/Navbar/Carousel";

import Card from "./components/Navbar/Card";
import Cardm from "./components/Navbar/Cardm";
import Quotes from "./components/Navbar/Quotes";
import PostinganTerbaru from "./components/Navbar/PostinganTerbaru";
export default function Home() {
  return (
    <>
      <div className="xs:hidden sm:hidden md:hidden lg:block xl:block">
        <Carousel />
        <Card />
        <div className=""></div>
      </div>
      <div className="xs:block sm:block md:block lg:hidden xl:hidden">
        <Cardm />
      </div>
      <div>
        <Quotes />
        <PostinganTerbaru />
      </div>
    </>
  );
}
