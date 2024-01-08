'use client'

import React, { useState } from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const SpotifyCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setIsPlaying(false);  
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full max-h-full    "
        src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*Q1KcPKJejrK_VaPIS0S6JQ.jpeg"
        alt="Album Cover"
      />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-white">
          Kawaranai Mono, Cover
        </div>
        <p className="text-gray-400">Zaychiku</p>
      </div>
      <div className="px-6 py-4">
        {selectedFile ? (
          <AudioPlayer
            audioFile={selectedFile}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
          />
        ) : (
          <input type="file" onChange={handleFileChange} accept="audio/*" />
        )}
      </div>
      <div className="px-6 py-4">
        <button
          onClick={handlePlayPause}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded mr-2"
          disabled={!selectedFile}  
        >
          {isPlaying ? 'Close' : 'Play'}
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default SpotifyCard;
