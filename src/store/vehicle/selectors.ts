import { createSelector } from "reselect";
import { IVehicleState } from "../../APIResponseTypes";

const vehicleSelector = (state: { vehicle: IVehicleState }) => state.vehicle;


const vehicles = createSelector([vehicleSelector], (state) => state.data?.data);
const isLoading = createSelector([vehicleSelector], (state) => state.isLoading);
const dataCount = createSelector([vehicleSelector], (state) => state.data?.dataCount);
const vehicle = createSelector([vehicleSelector], (state) => state.vehicle);

export default {
  vehicles,
  isLoading,
  dataCount,
  vehicle
};
