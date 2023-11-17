"use client";
import React from "react";
import Image from "next/image";
import { CustomBottonProps } from "@/types";

const CustomButton = ({title , handleClick , containerStyles , btnType , textStyles , rightIcon} : CustomBottonProps ) => {
  return (
    <button
      type={btnType || 'button'}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6 ">
            <Image fill className="object-contain" src={rightIcon} alt="right-icon"/>
          </div>
        )}
    </button>
  );
};

export default CustomButton;
