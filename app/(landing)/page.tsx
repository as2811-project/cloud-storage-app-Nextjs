"use client";
import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-start h-full text-white">
      <h1 className="text-8xl font-thin">
        Next
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Cloud
        </span>
      </h1>
      <h2 className="text-4xl mt-3 font-thin">
        A Next/.NET/Supabase Cloud Storage App
      </h2>
      <Link
        href="/login"
        className="mt-8 bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
      >
        Login
      </Link>
    </div>
  );
};

export default LandingPage;
