export interface Distributor {
  name: string;
  adress: string;
  email: string;
  password: string;
  payment?: string;
  history?: {
    orders: string[];
  };
  img: string;
  vehicle: string;
  dni: number;
  license: string;
}
