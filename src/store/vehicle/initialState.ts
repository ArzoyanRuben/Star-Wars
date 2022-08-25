import { IVehicleState } from "../../APIResponseTypes";

export function initialVehicleState(): IVehicleState {
    return {
        error: null,
        data: null,
        isLoading: true,
        vehicle: null
    };
}
