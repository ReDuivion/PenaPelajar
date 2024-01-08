'use client'
// components/AudioPlayerCard.js
import React from 'react';
import AudioPlayer from './AudioPlayer';

const AudioPlayerCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">My Audio Player</h2>
        <AudioPlayer />
        <p className="text-gray-700">
          Enjoy listening to your favorite tunes with our audio player.
        </p>
      </div>
    </div>
  );
};

export default AudioPlayerCard;
