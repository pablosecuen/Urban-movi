"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { fetchAllUsers } from "@component/Redux/user/userSlice";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { User } from "../../app/types/User";
import UserDropDownSettings from "../Dropdowns/UserDropDownSettings";

// components

export default function CardSettings() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const allUsers = useSelector((state: RootState) => state.user.allUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = allUsers.filter(
    (user) =>
      (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.id && user.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleSettingsClick = () => {
    setShowDropDown(!showDropDown); // toggle state variable on click
  };

  return (
    <form>
      {/*contendedor de render de todos los usuarios */}
      <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-100 shadow-lg">
        <div className="mb-0 rounded-t bg-white px-6 py-6">
          <div className="flex justify-between text-center">
            <h6 className="flex text-lg font-bold text-blueGray-700">Users List</h6>
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
          {/* este es el render de los usuarios */}
        </div>
        <div style={{ height: "500px", overflow: "scroll" }}>
          {filteredUsers.map((user) => (
            <div
              onClick={() => handleClick(user)}
              key={user.id}
              className="flex w-full cursor-pointer justify-between gap-4 border-2 px-4 py-2"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={user.img}
                  width={50}
                  height={50}
                  alt="profile pc"
                  className="h-12 w-12 rounded-full"
                />
                <h3 className="">{user.name}</h3>
              </div>
              <div className="flex w-80 items-center justify-around border-2">
                <p className="flex ">
                  <p className=" font-bold">id: </p>
                  {user.id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* user details */}
      <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-100 shadow-lg">
        <div className="mb-0 rounded-t bg-white px-6 py-6">
          <div className="flex justify-between  text-center">
            <h6 className="flex text-lg font-bold text-blueGray-700">User details</h6>
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
                    defaultValue={selectedUser ? selectedUser.name : ""}
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
                    defaultValue={selectedUser ? selectedUser.email : ""}
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
                    defaultValue={selectedUser ? selectedUser.name : ""}
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
                    defaultValue={selectedUser ? selectedUser.birthday : ""}
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
                      typeof selectedUser?.address === "string"
                        ? selectedUser.address
                        : selectedUser?.address?.street
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
                    defaultValue={selectedUser ? selectedUser.gender : ""}
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
                    defaultValue={selectedUser ? selectedUser.nationality : ""}
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
                    defaultValue={selectedUser ? selectedUser.cc : ""}
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
                    defaultValue={selectedUser ? selectedUser.ce : ""}
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
                  defaultValue={selectedUser ? selectedUser.createAt?.toString() : ""}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </form>
  );
}