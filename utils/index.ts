import { CarProps } from "@/types";

export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "a22307a3f8msh13dba5f72f48b56p11f934jsn20986f5b3c52",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const res = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    { headers: headers }
  );
  const result = await res.json();
  return result;
};

export const calculateRentalPrice = (year:number , city_mpg:number) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  // Assuming a base rental price and additional cost per year
  const baseRentalPrice = 20; // Base rental price in dollars
  const additionalCostPerYear = 10; // Additional cost per year in dollars

  // Assuming a base fuel efficiency and additional cost per lower mpg
  const baseMpg = 25; // Base miles per gallon
  const additionalCostPerLowerMpg = 5; // Additional cost per lower mpg in dollars

  // Calculate age-based cost
  const ageCost = age * additionalCostPerYear;

  // Calculate mpg-based cost
  const mpgCost = (baseMpg - city_mpg) * additionalCostPerLowerMpg;

  // Calculate total rental price
  const totalRentalPrice = baseRentalPrice + ageCost + mpgCost;

  return totalRentalPrice;
};

export const generateCarImageUrl = (car: CarProps , angle?:string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')
  const {make , year , model} = car
  url.searchParams.append('customer' , 'hrjavascript-mastery')
  url.searchParams.append('make' , make)
  url.searchParams.append('modelFamily' , model.split('')[0])
  url.searchParams.append('zoomType' , 'fullscreen')
  url.searchParams.append('modelYear' , `${year}`)
  url.searchParams.append('angle' , `${angle}`)

  return `${url}`

}
