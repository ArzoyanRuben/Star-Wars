import { IVehicleState } from "../../@types/vehicle_types";

export function initialVehicleState(): IVehicleState {
    return {
        error: null,
        data: null,
        isLoading: true,
        vehicle: null
    };
}
