'use client'

import React, { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ audioFile, isPlaying, onPlayPause }) => {
  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;

    if (audioFile) {
      const objectUrl = URL.createObjectURL(audioFile);
      audio.src = objectUrl;
    }

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error('Play Error:', error);
      });
    } else {
      audio.pause();
    }
  }, [audioFile, isPlaying]);

  const handlePlayPause = () => {
    if (onPlayPause) {
      onPlayPause(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} />
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
