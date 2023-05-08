import axios from "axios";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import success from "../../../../../../../assets/imagenes/success.png";
import { useState } from "react";

export default function Checkout() {
  const queryParams = new URLSearchParams(location.search);
  const paymentId: string | null = queryParams.get("payment_id");
  const merchantOrder: string | null = queryParams.get("merchant_order_id");
  const status: string | null = queryParams.get("status");
  const [dataState, setDataState] = useState({});
  const userId: string | null = "";

  return (
    <div className="flex flex-col justify-center gap-8">
      <p className="text-center text-2xl font-bold">Su pago ha sido realizado con éxito !</p>
      <Image src={success} alt="pago exitoso" className="h-80 w-80 self-center"></Image>
      <Link href="/home">
        <button className="mx-auto flex  w-1/2 justify-center py-1 text-center">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
