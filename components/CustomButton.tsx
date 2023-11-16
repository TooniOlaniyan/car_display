"use client";
import React from "react";
import Image from "next/image";
import { CustomBottonProps } from "@/types";

const CustomButton = ({title , handleClick , containerStyles , btnType} : CustomBottonProps ) => {
  return (
    <button
      type={btnType || 'button'}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
        <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
