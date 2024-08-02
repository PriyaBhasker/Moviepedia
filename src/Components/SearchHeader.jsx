import React from "react";
import InputBox from "./common/InputBox";
import MainButton from "./common/MainButton";
const SearchHeader = () => {
  return (
    <div className="w-full bg-black text-white h-[23rem] flex  flex-col gap-16 justify-center items-center">
      <h1 className="text-5xl font-bold">Search movies,Tv Shows and more</h1>

      <form className="text-white flex gap-2">
        <InputBox type="text" placeholder="Type here to Search"/>
        <MainButton buttonTittle="Search"/>
      </form>
    </div>
  );
};

export default SearchHeader;
