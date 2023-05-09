import Image from "next/image";
import Link from "next/link";
import { iconsData } from "../../assets/data";
import { HiPhone, HiDevicePhoneMobile, HiEnvelope } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className={"flex  flex-col justify-around gap-5 bg-verde px-5 py-10 tracking-wide"}>
      <div className="flex flex-col gap-10 md:flex-row md:justify-between ">
        <div className="mx-auto flex max-w-md flex-col gap-5 text-center">
          <h4 className="font-semibold uppercase">Nuestra misión</h4>
          <p className="text-sm">
            Nuestra misión es hacer del transporte terrestre intermunicipal en Colombia una
            experiencia cómoda y segura, que permita generar eficiencias económicas y medio
            ambientales sostenibles en el tiempo.{" "}
          </p>
        </div>
        <hr className="h-[2px] bg-black/30 text-black md:hidden" />
        <div className="flex flex-col gap-3 md:w-1/4 ">
          <h3 className="px-2 font-semibold uppercase">Compañía</h3>
          <ul className=" flex flex-col gap-4">
            <li>
              <span className="transition_all rounded-md px-2 py-1 hover:cursor-pointer hover:bg-celeste hover:shadow-md hover:shadow-black/30">
                Acerca de nosotros
              </span>
            </li>
            <li>
              <span className="transition_all rounded-md px-2 py-1 hover:cursor-pointer hover:bg-celeste hover:shadow-md hover:shadow-black/30">
                Preguntas frecuentes
              </span>
            </li>
            <li>
              <span className="transition_all rounded-md px-2 py-1 hover:cursor-pointer hover:bg-celeste hover:shadow-md hover:shadow-black/30">
                Ayuda por emergencia
              </span>
            </li>
            <li>
              <span className="transition_all rounded-md px-2 py-1 hover:cursor-pointer hover:bg-celeste hover:shadow-md hover:shadow-black/30">
                Nuestra mision
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:w-1/4 ">
          <h3 className="font-semibold uppercase">Contacto</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3">
              <HiPhone className="h-5 w-5" />
              <small>(+57) (604) 208 73 99</small>
            </li>
            <li className="flex gap-3">
              <HiDevicePhoneMobile className="h-5 w-5" /> <small>(+57) 311 319 68 55</small>
            </li>
            <li className="flex gap-3">
              <HiEnvelope className="h-5 w-5" /> <small>soporte@urban.com</small>
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-[2px] bg-black/30 text-black" />

      <div className="mx-auto flex max-w-3xl items-center justify-center gap-16 text-center">
        <small>© 2023 Urban.</small>
        <small>Terminos</small>
      </div>
    </footer>
  );
}
