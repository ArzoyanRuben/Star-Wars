export interface IVehicleList {
  data: IVehicle[];
  dataCount: number
}

export interface IVehicle {
  name: string;
  model: string;
  created: string;
  manufacturer: string;
  consumables: string;
  passengers: string;
  crew: string;
  vehicle_class: string;
  error?: boolean;
  url?: string;

}

export interface IVehicleState {
  error: null | string;
  data: null | IVehicleList;
  isLoading: boolean;
  vehicle: null | IVehicle;
}