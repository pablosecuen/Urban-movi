"use client";
import CardSettings from "../../../components/Cards/CardSettings";
import CardProfile from "../../../components/Cards/CardProfile";

import { RootState } from "@component/Redux/store/store";

import { fetchAllUsers } from "@component/Redux/user/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import CardProfile from "@component/components/Cards/CardProfile";

// components

export default function Settings() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const allUsers = useSelector((state: RootState) => state.user.allUsers);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
  console.log(allUsers);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardSettings />
        </div>
        <div className="w-full px-4 lg:w-4/12">
          <CardProfile />
        </div>
      </div>
    </>
  );
}