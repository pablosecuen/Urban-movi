"use client";
import React, { useState, useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import CardStats from "../Cards/CardStats";
import { fetchAllTravels } from "@component/Redux/travel/travelSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { fetchAllUsers } from "@component/Redux/user/userSlice";

config.autoAddCss = false;

export default function HeaderStats(): JSX.Element {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const allTravels = useSelector((state: RootState) => state.travel.allTravels);
  const allUsers = useSelector((state: RootState) => state.user.allUsers);

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalTravels, setTotalTravels] = useState(0);

  useEffect(() => {
    dispatch(fetchAllTravels());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    setTotalUsers(allUsers.length);
    setTotalTravels(allTravels.length);
  }, [allUsers, allTravels]);

  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  const usersToday = allUsers.filter((user) => {
    const userDate = new Date(user?.createdAt ?? 0);
    return (
      userDate instanceof Date &&
      userDate >= new Date(today.setHours(0, 0, 0, 0)) &&
      userDate <= new Date(today.setHours(23, 59, 59, 999))
    );
  }).length;

  const usersLastWeek = allUsers.filter((user) => {
    const userDate = new Date(user?.createdAt ?? 0);
    return (
      userDate instanceof Date &&
      userDate >= new Date(sevenDaysAgo.setHours(0, 0, 0, 0)) &&
      userDate <= new Date(sevenDaysAgo.setHours(23, 59, 59, 999))
    );
  }).length;

  const travelsLastWeek = allTravels.filter((travel) => {
    const travelDate = new Date(travel?.createdAt ?? 0);
    return (
      travelDate instanceof Date &&
      travelDate >= new Date(sevenDaysAgo.setHours(0, 0, 0, 0)) &&
      travelDate <= new Date(sevenDaysAgo.setHours(23, 59, 59, 999))
    );
  }).length;

  const travelsToday = allTravels.filter((travel) => {
    const travelDate = new Date(travel?.createdAt ?? 0);
    return (
      travelDate instanceof Date &&
      travelDate >= new Date(today.setHours(0, 0, 0, 0)) &&
      travelDate <= new Date(today.setHours(23, 59, 59, 999))
    );
  }).length;

  const usersChange =
    usersLastWeek === 0 ? 0 : ((usersToday - usersLastWeek) / usersLastWeek) * 100;
  const travelsChange =
    travelsLastWeek === 0 ? 0 : ((travelsToday - travelsLastWeek) / travelsLastWeek) * 100;

  return (
    <>
      {/* Header */}

      <div className="relative bg-blueGray-800 pb-32 pt-12 md:pt-32">
        <div className="mx-auto w-full px-4 md:px-10">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Users"
                  statTitle={totalUsers}
                  statArrow={usersChange >= 0 ? "up" : "down"}
                  statPercent={`${Math.abs(usersChange).toFixed(2)}%`}
                  statPercentColor={usersChange >= 0 ? "text-emerald-500" : "text-red-500"}
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="NEW USERS OF LAST WEEK"
                  statTitle={usersLastWeek.toString()}
                  statArrow={usersChange >= 0 ? "up" : "down"}
                  statPercent={`${Math.abs(usersChange).toFixed(2)}%`}
                  statPercentColor={usersChange >= 0 ? "text-emerald-500" : "text-red-500"}
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="TOTAL TRAVELS"
                  statTitle={totalTravels}
                  statArrow={travelsChange >= 0 ? "up" : "down"}
                  statPercent={`${Math.abs(usersChange).toFixed(2)}%`}
                  statPercentColor={usersChange >= 0 ? "text-emerald-500" : "text-red-500"}
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow={usersChange >= 0 ? "up" : "down"}
                  statPercent={`${Math.abs(usersChange).toFixed(2)}%`}
                  statPercentColor={usersChange >= 0 ? "text-emerald-500" : "text-red-500"}
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blueGray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
