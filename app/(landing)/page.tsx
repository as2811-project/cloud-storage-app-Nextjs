//"use client";
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
        A NextJS/.NET/Appwrite Cloud Storage App
      </h2>
      <div className="flex">
        <Link
          href="/login"
          className="mt-8 bg-white hover:from-pink-500 hover:to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300 mr-3"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-3.5 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
