import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import UndoIcon from "@mui/icons-material/Undo";
import { Typography, IconButton } from "@mui/material";

import { vehicleOp, vehicleSel } from "../../store/vehicle/index";
import { useAppSelector } from "../../store";

import { CardWrapper } from "./styles";
import { Card, Loader, NoData } from "../../components";

const SingleItemPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useAppSelector(vehicleSel.vehicle);

  useEffect(() => {
    dispatch(vehicleOp.getVehicleDataAsync(id));

    return () => {
      dispatch(vehicleOp.removeVehicleData());
    };
  }, []);

  return !data ? (
    <Loader />
  ) : (
    <CardWrapper>
      <div className="single-item">
        <div className="back-button">
          <IconButton
            aria-label="delete"
            onClick={() => {
              navigate(`/`);
            }}
          >
            <UndoIcon fontSize="small" />
          </IconButton>
        </div>
        <>
          {data.error ? (
            <NoData />
          ) : (
            <div className="user-item">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="item-title"
              >
                {data.name}
              </Typography>
              <div>
                <Card title={"model"} subtitle={data.model} />
                <Card title={"Class"} subtitle={data.vehicle_class} />
                <Card title={"Manufacturer"} subtitle={data.manufacturer} />
                <Card title={"Consumables"} subtitle={data.consumables} />
                <Card title={"Passengers"} subtitle={data.passengers} />
                <Card title={"Crew"} subtitle={data.crew} withoutBorder />
              </div>
            </div>
          )}
        </>
      </div>
    </CardWrapper>
  );
};

export default SingleItemPage;
