"use client";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import bg from "../../assets/imagenes/city.webp";

export default function Menu() {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 750 });

  return (
    <>
      {!isMobile && (
        <div className="relative mt-10 flex h-full w-full flex-col gap-4 overflow-hidden  pb-8 lg:w-2/3 lg:items-center lg:justify-center lg:rounded-3xl lg:px-24 lg:py-8 lg:shadow-2xl lg:shadow-black/40 2xl:w-3/4 2xl:py-16">
          {" "}
          <Image
            className="absolute -z-20  contrast-150 saturate-150"
            layout="fill"
            objectFit="cover"
            alt=""
            src={bg}
          />
          <div className="absolute -z-10  h-full w-full bg-black/40"></div>
          <Link
            href="/home/reserva"
            className={` w-72 rounded-2xl bg-white py-1 text-center hover:bg-verde 2xl:w-full 2xl:text-lg ${
              pathname === "/home/reserva" && "!bg-verde "
            }`}
          >
            Reserva tu viaje
          </Link>
          <Link
            href="/home/gestion"
            className={`w-72 rounded-2xl bg-white py-1 text-center hover:bg-verde 2xl:w-full 2xl:text-lg ${
              pathname === "/home/gestion" && "!bg-verde "
            }`}
          >
            Gestiona tus viajes
          </Link>
          <Link
            href="/home/paqueteria"
            className={`w-72 rounded-2xl bg-white py-1 text-center hover:bg-verde 2xl:w-full 2xl:text-lg ${
              pathname === "/home/paqueteria" && "!bg-verde "
            }`}
          >
            Envío de paquetes
          </Link>
          <Link
            href="/home/especiales"
            className={`w-72 rounded-2xl bg-white py-1 text-center hover:bg-verde 2xl:w-full 2xl:text-lg ${
              pathname === "/home/especiales" && "!bg-verde "
            }`}
          >
            Tengo una necesidad especial
          </Link>
        </div>
      )}
    </>
  );
}
