import CardReservaSlug from "@component/components/Cards/CardReservaSlug";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban | Viajes",
  description:
    "Explora nuestra amplia selección de viajes disponibles en nuestra página de gestión de viajes. Aquí encontrarás una variedad de opciones de transporte para satisfacer tus necesidades de viaje. Navega por destinos, fechas y horarios para descubrir las mejores opciones disponibles. Ya sea que estés buscando buses intermunicipales, taxis públicos o transportes privados, nuestra página de gestión de viajes te brinda una visión completa de todas las opciones disponibles. Planifica tus viajes de manera eficiente y elige la opción que mejor se ajuste a tus preferencias y horarios. Disfruta de una experiencia de viaje sin complicaciones con nuestra herramienta de gestión de viajes.",
  keywords:
    "gestión de viajes, viajes disponibles, opciones de transporte, buses intermunicipales, taxis públicos, transportes privados, destinos, fechas de viaje, horarios, planificar viajes, elegir opciones de viaje, experiencia de viaje, herramienta de gestión de viajes.",
};
export default function SearchResults({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto h-full rounded-3xl p-10 shadow-2xl shadow-black/40 lg:ml-12 ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-center text-xl text-blue">
          Estas son las mejores opciones encontradas
        </h1>
        <CardReservaSlug params={params} />
      </div>
      <div className="flex gap-2 pt-10">
        <button>Ver mas opciones</button>
      </div>
    </div>
  );
}
