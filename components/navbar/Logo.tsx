"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className=" hidden md:block cursor-pointer"
      height={100}
      width={100}
      src={"/logo.png"}
    />
  );
};

export default Logo;
