import { vehicleSlice } from "./vehicleSlicer";

const { setError, setVehicleData, setVehiclesData, setIsLoadingData } = vehicleSlice.actions;

const getVehicleListDataAsync = ({ page, search }: { page?: null | string; search?: null | string }) => async (dispatch: Function) => {
    try {
        let url = "https://swapi.dev/api/vehicles";
        if (page) {
            url += `/?page=${page}`
        }
        if (search) {
            url += `&search=${search}`
        }
        const vehiclesData = await fetch(url, {
            method: 'GET',
        }).then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json()
        })

        dispatch(setVehiclesData({ data: vehiclesData.results, dataCount: vehiclesData.count }));
        dispatch(setIsLoadingData(false));

    } catch (error) {
        dispatch(setVehiclesData({ data: [], dataCount: 0 }));
        dispatch(setError(error));
        dispatch(setIsLoadingData(false));
    }
};

const getVehicleDataAsync = (id: string | undefined) => async (dispatch: Function) => {

    try {
        const vehicleData = await fetch(`https://swapi.dev/api/vehicles/${id}`, {
            method: 'GET',
        }).then((response) => {

            if (!response.ok) {
                throw new Error();
            }
            return response.json()
        })

        dispatch(setVehicleData(vehicleData));
        dispatch(setIsLoadingData(false));
    } catch (error) {
        console.log("error", error);
        dispatch(setVehicleData({ error: true }));
        dispatch(setIsLoadingData(false));
    }

};
const changeVehicleProfileData = (data: any) => (dispatch: Function) => {
    dispatch(setVehicleData(data));
};


const catchError = (error: any) => (dispatch: Function) => {
    dispatch(setError(error));
};
const removeVehicleData = () => (dispatch: Function) => {
    dispatch(setVehicleData({}));
};


export default {
    getVehicleDataAsync,
    changeVehicleProfileData,
    catchError,
    removeVehicleData,
    getVehicleListDataAsync,
};
