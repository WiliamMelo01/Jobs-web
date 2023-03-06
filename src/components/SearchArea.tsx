import React, { useState } from "react";
import SuitcaseIcon from "../assets/images/suitcase.png";

export default function SearchArea() {
  const [SearchParam, setSearchParam] = useState("");

  function handleSearch() {
    console.log(SearchParam);
    setSearchParam("");
  }

  return (
    <div className="w-full h-[138px] rounded-lg grid place-items-center  bg-builds bg-cover bg-center bg-no-repeat">
      <div className="w-[80%] h-[55px] bg-myColors-500 flex items-center rounded max-w-[790px]">
        <img src={SuitcaseIcon} alt="Suitcase icon" className="h-4 w-4 mx-2" />
        <input
          type="text"
          className="w-[60%] h-full top-0 left-0 text-myColors-400 text-ellipsis outline-none  px-2 border-none min-[650px]:flex-1"
          placeholder="Title, companies, expertise or benefits"
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <button
          type="button"
          className="w-[40%] h-[90%] bg-myColors-200 m-1  rounded font-roboto font-medium text-white min-[650px]:w-[146px] min-[650px]:justify-self-end"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
