import CustomFilters from "./CustomFilters"
import CustomInput from "./CustomInput"
import React, { useState } from "react";


const Sidebar = () => {
    const [minPrice, setMinPrice] = useState(123);
    const [maxPrice, setMaxPrice] = useState(40000);
  
    const handleMinChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setMinPrice(Number(e.target.value));
    };
  
    const handleMaxChange = (e :React.ChangeEvent<HTMLInputElement>) => {
      setMaxPrice(Number(e.target.value));
    };
  return (
    <div className="hidden md:block w-[30%] text-left ">
        <div className="bg-[#F8F8F8] p-10">
            <p className="text-xl font-bold text-black">Your Search</p>
            <form action="" className="py-3">
                <CustomInput name="event" id="event" label="Event Type" placeholder="Wedding"/>
                <CustomInput name="location" id="location" label="Location" placeholder="Lagos"/> 
                <CustomInput name="price" id="price" label="Price Range" placeholder="&#8358;20k - &#8358;40k"/> 
                <CustomInput name="rating" id="rating" label="Rating" placeholder="Excellent"/> 
                <button className="bg-[#0166FF] py-2 mt-5 text-white rounded-xl text-sm font-semibold w-full">Search</button>
            </form>
        </div>
        <div className="p-10">
            <h1 className="text-xl font-bold text-black pb-3">Popular filters</h1>
            <div>
                <CustomFilters name="wedding" id="wedding" label="Wedding"/>
                <CustomFilters name="dinner" id="dinner" label="Dinner Parties"/>
                <CustomFilters name="meeting" id="meeting" label="Meeting"/>
                <CustomFilters name="networking" id="networking" label="Networking"/>
            </div>
        
        <div>
            <h1 className="text-xl font-bold text-black pb-3">Price Range</h1>
            {/* <div className="w-full bg-gray-300 rounded-lg"> */}
        {/* This should be a real histogram if you have data */}
      {/* </div> */}

      
      <div className="relative ">
        <input
          type="range"
          min="123"
          max="40000"
          value={minPrice}
          onChange={handleMinChange}
          className="absolute left-0 w-f"
        />
        <input
          type="range"
          min="123"
          max="40000"
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute right-0 w-full "
        />
      </div>

      
      <div className="grid grid-cols-2 gap-x-5 mt-4">
        <div>
        <label htmlFor="" className="text-sm font-semibold text-[#767676]">Min Price</label>
        <input
          type="number"
          value={minPrice}
          onChange={handleMinChange}
          className="border px-2 py-1 w-full rounded-sm border-[#767676] text-xs font-semibold text-black"
        />
        </div>
       <div>
        <label htmlFor="" className="text-sm font-semibold text-[#767676]">Max Price</label>
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxChange}
          className="border px-2 py-1 w-full rounded-sm border-[#767676] text-xs font-semibold text-black"
        />
        </div>
      </div>
        </div>
        <div>
        <h1 className="text-xl font-bold text-black pt-5 pb-3">Guest Rating</h1>  
        <CustomFilters name="any" id="any" label="Any"/>
        <CustomFilters name="excellent" id="excellent" label="Excellent"/>
        <CustomFilters name="very" id="very" label="Very good"/>
        <CustomFilters name="good" id="good" label="Good"/>
        </div>
    </div>
    </div>
  )
}

export default Sidebar