"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { Query } from "@component/app/types/Passages";

export default function SearchResults({params}: {params: {slug: string}}) {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  // const allPassages = useSelector((state: RootState) => state.passage.allPassages);
//  const passages = useSelector((state: RootState) => state.passage.allPassagesByQuery.passages);
//   const status = useSelector((state: RootState) => state.passage.status);
// const error = useSelector((state: RootState) => state.passage.error);

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }
  // console.log(passages);
  
  const query: Query = {
    origin: params.slug[0],
    destination: params.slug[1],
    departureDate: params.slug[2].split("-").join("/"),
    ...(params.slug[3] && { arrivalDate: params.slug[3] }),
    // armo la query y agrego las propiedades extras si las hay
  };

  return (
    <h1>soy slug</h1>
    // <div className="mx-auto h-full rounded-3xl p-10 shadow-2xl shadow-black/40 lg:ml-12 ">
    //   <div className="flex flex-col gap-4 ">
    //     <h1 className="text-center text-xl text-blue">
    //       Estas son las mejores opciones encontradas
    //     </h1>

    //     {passages.map((passage) => (
    //       <Link
    //         href={`/home/reserva/viajes/${passage.id}`}
    //         key={passage.id}
    //         className="group flex items-center justify-between gap-4 rounded-full border bg-white px-10 py-2 transition-all duration-200 hover:border-blue"
    //       >
    //         <small className="font-bold capitalize text-blueGray-700 ">
    //           {passage.origin} - {passage.destination}
    //         </small>
    //         <small>{passage.departureDate}</small>
    //       </Link>
    //     ))}
    //   </div>
    //   <div className="flex gap-2 pt-10">
    //     <button>Ver mas opciones</button>
    //   </div>
    // </div>
  );
}