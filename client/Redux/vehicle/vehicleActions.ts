import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Vehicle } from "@component/app/types/Vehicle";
import { QueryParamsVehicle } from "@component/app/types/QueryParams";

export const getAllVehicles = createAsyncThunk<Vehicle[], void>(
  "vehicles/getAllVehicles",
  async () => {
    const response = await axios.get(`https://api-urban.onrender.com/vehicle?page=1&pageSize=1000`);
    return response.data.vehicles;
  }
);

export const getVehicleById = createAsyncThunk<Vehicle, string>(
  "vehicles/getVehicleByName",
  async (vechicleId) => {
    const response = await axios.get(`https://api-urban.onrender.com/vehicle/${vechicleId}`);
    return response.data;
  }
);

export const getVehicleByQuery = createAsyncThunk<Vehicle[], QueryParamsVehicle>(
  "vehicles/getVehicleByQuery",
  async (queryParams: QueryParamsVehicle) => {
    const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
    const response = await axios.get(
      `https://api-urban.onrender.com/vehicle?page=1&pageSize=10000&${urlSearchParams.toString()}`
    );
    return response.data.vehicles;
  }
);
