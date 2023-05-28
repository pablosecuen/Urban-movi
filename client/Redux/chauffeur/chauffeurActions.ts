import {
  Chauffeur,
  ChauffeurQueryParams,
  FilteredChauffeurs,
} from "@component/app/types/Chauffeur";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
//Hay que refactorizar el codigo, tiene que haber actions unicamente para GetAll, GetById, y GetByQueryParams

export const getAllChauffeurs = createAsyncThunk<Chauffeur[], void>(
  "vehicles/getAllChauffeurs",
  async () => {
    const response = await axios.get(`https://api-urban.onrender.com/chauffeur?page=1&pageSize=1000`);
    return response.data.chauffeurs;
  }
  //Falta hacer su slice
);

export const getChauffeurById = createAsyncThunk<Chauffeur, string>(
  "vehicles/getChauffeurById",
  async (chauffeurId: string) => {
    const response = await axios.get(`https://api-urban.onrender.com/chauffeur/${chauffeurId}`);
    return response.data;
  }
  //Falta hacer su slice
);

export const getChauffeurs = createAsyncThunk<FilteredChauffeurs, ChauffeurQueryParams>(
  "chauffeur/getFilteredChauffeurs",
  async (queryParams: ChauffeurQueryParams): Promise<FilteredChauffeurs> => {
    const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
    let URL = "https://api-urban.onrender.com/chauffeur?";
    URL += "page=1&pageSize=10";
    const URLParams = urlSearchParams.toString();
    if (URLParams) URL += "&" + URLParams;
    const response: AxiosResponse = await axios.get(URL);

    const formatedRes: FilteredChauffeurs = {
      data: response.data.chauffeur,
      activeFilters: response.data.activeFilters,
      currentPage: response.data.currentPage,
      totalPages: response.data.totalPages,
    };
    return formatedRes; // data formateada para usar el spred al agregar al state
  }
);
