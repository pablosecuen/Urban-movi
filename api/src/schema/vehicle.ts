export interface VehicleToRegister {
  patent: string;
  brand: string;
  model: string;
  year: string;
  img: string[];
  ownerId: string;
  chauffeurId: string;
  documents: string[];
}

export interface Vehicle extends VehicleToRegister {
  deleted?: boolean;
  createAt?: string;
}

export interface VehicleToUpdate {
  patent?: string;
  brand?: string;
  model?: string;
  year?: string;
  img?: string[];
  ownerId?: string;
  chauffeurId?: string;
  documents?: string[];
  updateAt?: string;
}
