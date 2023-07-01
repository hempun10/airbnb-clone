"use client";
import { MenuItemProps } from "@/types/types";
import React from "react";

const MenuItem = ({ onClick, label }: MenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className=" px-4 py-3 hoer:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
