import {
  MapPin,
  ArrowLeftRight,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";
import FromInput from "./FromInput";
import ToInput from "./ToInput";
import DateRangePicker from "./DateRangePicker";
import TravelersInput from "./TravelersInput";
import DateInput from "./DateInput";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function SearchCard() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/results");
  };

  return (
    <div className="relative mx-auto -mt-[20%] w-[95%] max-w-6xl">
      {/*  CATEGORY TABS  */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full bg-white p-1 shadow-md">
          <button className="rounded-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">
            Hotels
          </button>

          <button className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white">
            Flights
          </button>

          <button className="rounded-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">
            Trains
          </button>

          <button className="rounded-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">
            Attractions
          </button>

          <button className="rounded-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">
            Flight + Hotel
          </button>
        </div>
      </div>

      {/*  MAIN CARD  */}
      <div className="rounded-2xl bg-white p-6 pt-10 shadow-xl">
        {/*  Trip type + Cabin  */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="trip" />
              One Way
            </label>

            <label className="flex items-center gap-2 font-medium text-gray-900 cursor-pointer">
              <input type="radio" name="trip" defaultChecked />
              Round Trip
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="trip" />
              Multi City
            </label>
          </div>

          <button className="rounded-full border px-4 py-1.5 text-sm hover:bg-gray-50">
            Economy ▼
          </button>
        </div>

        {/*  Main Search Bar  */}
        <div className="mt-6 flex items-center rounded-full bg-gray-100 px-3 py-2">
          {/* FROM */}
          <FromInput />

          <div className="h-8 w-px bg-gray-300" />

          {/* SWAP */}
          <button className="mx-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-50">
            <ArrowLeftRight className="h-4 w-4 text-gray-600" />
          </button>

          <div className="h-8 w-px bg-gray-300" />

          {/* TO */}
          <div className="flex flex-1 items-center gap-3 px-4 cursor-pointer">
            <ToInput />
          </div>

          <div className="h-8 w-px bg-gray-300" />

          {/* DATE */}
          <div className="flex items-center gap-3 px-4 cursor-pointer">
            <CalendarDays className="h-5 w-5 text-gray-500" />
            <DateInput />
          </div>

          <div className="h-8 w-px bg-gray-300" />

          {/* TRAVELERS */}
          <div className="flex items-center gap-3 px-4 cursor-pointer">
            <Users className="h-5 w-5 text-gray-500" />
            <TravelersInput />
          </div>

          {/* SEARCH BUTTON */}
          <button 
            onClick={handleSearch}
            className="ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}


