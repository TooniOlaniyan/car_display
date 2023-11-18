"use client";
import React , { useState } from "react"; 
import Image from "next/image";
import { useRouter } from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";
interface ClassProps {
  otherClasses: string;
}

const SearchButton = ({ otherClasses }: ClassProps) => (
  <button className={`-ml-3 z-10${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter()


  const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(manufacturer === '' || model===''){
      alert('Please include a model and manufacturer')

    }
    updateSearchParams(model.toLowerCase() , manufacturer.toLowerCase())

    
  };

  const updateSearchParams = (model:string , manufacturer:string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if(model){
      searchParams.set('model' , model)
    }else{
      searchParams.delete('model' , model)
    }
    if(manufacturer){
      searchParams.set('manufacturer' , manufacturer)
    }else{
      searchParams.delete('manufacturer' , manufacturer)
    }
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName)
    

  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          className="searchbar__input"
          placeholder="corolla"
          onChange={(e) => setModel(e.target.value)}
          value={model}
          name="modal"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
 