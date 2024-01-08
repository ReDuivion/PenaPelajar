import React from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import SpotifyCard from "../components/AudioPlayer/SpotifyCard";
export default function page() {
  return (
    <>
      <div>
        <div className="mt-6">
          <h1 className="text-center">Test Ngulik Lagu + Component </h1>
        </div>
        <SpotifyCard />
      </div>
    </>
  );
}
