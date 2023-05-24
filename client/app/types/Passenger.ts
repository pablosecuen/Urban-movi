import { Passage } from "./Passages";

export interface PassengerFormData {
    nombre: string;
    apellido: string;
    nacionalidad: string;
    tipoDocumento: string;
    quantity: string;   
    fechaNacimiento: string;
    genero: string;
    codigoArea:string;
    telefono: string;
    email: string;
    cc: string;
  }
  
  export interface PassengerFormModalProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    seat: string | null;
    enabledSeats: Passage;


  }
  