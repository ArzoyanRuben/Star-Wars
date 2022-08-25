import { createSlice } from "@reduxjs/toolkit";

import { initialVehicleState } from "./initialState";

export const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: initialVehicleState(),
  reducers: {
    setVehiclesData(state, action) {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    setVehicleData(state, action) {
      state.vehicle = action.payload;
    },
    setIsLoadingData(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});
