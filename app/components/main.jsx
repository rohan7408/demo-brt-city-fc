"use client";
import React, { useRef } from "react";

const Main = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/bghome.png")' }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-40"></div>

      {/* Scroll down button centered */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-600%]">
        <button className="bg-white bg-opacity-70 text-black px-4 py-2 rounded-full text-2xl animate-bounce">
          Scroll Down ↓
        </button>
      </div>
    </div>
  );
};

export default Main;
