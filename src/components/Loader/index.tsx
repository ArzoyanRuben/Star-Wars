import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { LoadingWrapper } from "./styles";

export function Loader() {
  return (
    <LoadingWrapper>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </LoadingWrapper>
  );
}
