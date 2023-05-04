"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Travel } from "../../app/types/Travels";
import UserDropDownSettings from "../Dropdowns/UserDropDownSettings";
import { fetchAllTravels } from "@component/Redux/travel/travelSlice";

// components

export default function CardUsers() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const allTravels = useSelector((state: RootState) => state.travel.allTravels);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTravel, setSelectedTravel] = useState<Travel | null>(null);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    dispatch(fetchAllTravels());
  }, [dispatch]);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredTravels = allTravels.filter(
    (travel) =>
      (travel.origin && travel.origin.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (travel.userId && travel.userId.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleClick = (travel: Travel) => {
    setSelectedTravel(travel);
  };

  const handleSettingsClick = () => {
    setShowDropDown(!showDropDown); // toggle state variable on click
  };

  return (
    <div>
      {/*contendedor de render de todos los usuarios */}
      <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-100 shadow-lg">
        <div className="mb-0 rounded-t bg-white px-6 py-6">
          <div className="flex justify-between text-center">
            <h6 className="flex text-lg font-bold text-blueGray-700">Travel list</h6>
            <div className="flex items-center">
              <label htmlFor="search" className="flex items-center text-gray-500">
                <FaSearch className="w-auto" />
                <input
                  type="text"
                  id="search"
                  className="ml-2 border-b-2 border-gray-500 focus:outline-none"
                  placeholder="Buscar usuarios"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </label>
              {/* <button
                className="mr-1 w-auto rounded bg-blueGray-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blueGray-600"
                type="button"
              >
                Settings
              </button> */}
            </div>
          </div>
          {/* este es el render de los travels */}
        </div>
        <div style={{ height: "500px", overflow: "scroll" }}>
          {filteredTravels.map((travel) => (
            <div
              onClick={() => handleClick(travel)}
              key={travel.id}
              className="flex w-full cursor-pointer justify-between gap-4 border-2 px-4 py-2"
            >
              <div className="flex items-center gap-4">
                <h3 className="">{travel.origin}</h3>
              </div>
              <div className="flex items-center gap-4">
                <h3 className="">{travel.destination}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Travel details */}
      <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-100 shadow-lg">
        <div className="mb-0 rounded-t bg-white px-6 py-6">
          <div className="flex justify-between  text-center">
            <h6 className="flex text-lg font-bold text-blueGray-700">Travel details</h6>
            <button
              className="relative mr-1 w-auto rounded bg-blueGray-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blueGray-600"
              type="button"
              onClick={handleSettingsClick}
            >
              Settings
            </button>
            {showDropDown && <UserDropDownSettings />}
          </div>
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form>
            <h6 className="mb-6 mt-3 text-sm font-bold uppercase text-blueGray-400">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedTravel ? selectedTravel.userId : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedTravel ? selectedTravel.chauffeurId : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedTravel ? selectedTravel.id : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Fecha de nacimiento
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedTravel ? selectedTravel.userId : ""}
                  />
                </div>
              </div>
            </div>

            <hr className="border-b-1 mt-6 border-blueGray-300" />

            <h6 className="mb-6 mt-3 text-sm font-bold uppercase text-blueGray-400">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="lg:w-12/12 w-full px-4">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={
                      typeof selectedTravel?.origin === "string"
                        ? selectedTravel.origin
                        : selectedTravel?.origin
                    }
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Género
                  </label>
                  <input
                    type="email"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedTravel ? selectedTravel.origin : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Nacionalidad
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedTravel ? selectedTravel.destination : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    C.C.
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedTravel ? selectedTravel.travel : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    C.E.
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedTravel ? selectedTravel.price : ""}
                  />
                </div>
              </div>
            </div>

            <hr className="border-b-1 mt-6 border-blueGray-300" />

            <h6 className="mb-6 mt-3 text-sm font-bold uppercase text-blueGray-400">About Me</h6>
            <div className="w-full px-4 lg:w-4/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  C.E.
                </label>
                <input
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                  defaultValue={selectedTravel ? selectedTravel.createAt?.toString() : ""}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
