import React from "react";

export default function Hero() {
  return (
    <>
      <main>
        <div className="mt-20">
          <div className="flex justify-between items-center">
            <div>
              <a className="text-gray-600 ml-20">--~Our Services</a>
              <div className="ml-24 text-2xl">
                <h1>Find Out What</h1>
                <h1>We Can Do For You</h1>
              </div>
            </div>
            <div className="ml-24">
              <button className="btn ml-auto w-30 btn-md mr-20 ">
                View More
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
