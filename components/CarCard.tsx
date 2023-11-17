"use client";
import { useState, useEffect } from "react";
import { CarProps } from "@/types";
import { calculateRentalPrice } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;
  const carRent = calculateRentalPrice(year, city_mpg);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold"></span>$
        {carRent}
        <span className="self-end text-[14px] font-medium">/ day</span>
      </p>
    </div>
  );
};

export default CarCard;
