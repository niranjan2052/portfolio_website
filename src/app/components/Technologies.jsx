"use client";
import React from "react";
import Image from "next/image";

const Technologies = () => {
  const imgAddresses = [
    "/Images/Logos/HTML5_Badge.svg",
    "/Images/Logos/CSS3_logo.svg",
    "/Images/Logos/JavaScript.svg",
    "/Images/Logos/java-4.svg",
    "/Images/Logos/React-icon.svg",
    "/Images/Logos/redux.svg",
    "/Images/Logos/flutter-logo.svg",
    "/Images/Logos/bootstrap-4.svg",
    "/Images/Logos/tailwind-css-2.svg",
    "/Images/Logos/Git_icon.svg",
    "/Images/Logos/github-icon-1.svg",
    "/Images/Logos/nodejs-1.svg",
  ];
  return (
    <div className="sm:px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="text-center p-2 m-2 text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Technologies</h1>
      <div className="border-[#33353F] sm:border rounded-md py-4 sm:px-8 grid grid-cols-4 md:grid-cols-6 items-center justify-between relative">
        {imgAddresses.map((imgAddress) => {
          return (
            <div className="m-2 p-2">
              <Image
                src={imgAddress}
                alt="hero image"
                className=""
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
