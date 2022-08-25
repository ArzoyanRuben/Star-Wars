import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { LoadingWrapper } from "./styles";

export default function Loader() {
  return (
    <LoadingWrapper>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </LoadingWrapper>
  );
}
