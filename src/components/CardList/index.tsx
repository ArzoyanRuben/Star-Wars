import React from "react";
import { useNavigate } from "react-router-dom";

import { CardActionArea, Card, CardContent, Typography } from "@mui/material";

import { CardListWrapper } from "./styles";
import { IVehicle } from "../../APIResponseTypes";

interface Iprops {
  itemList: IVehicle[];
  showItems?: Function;
  changeType?: Function;
}

export function CardList(props: Iprops) {
  const { itemList } = props;
  const navigate = useNavigate();

  return (
    <CardListWrapper>
      {itemList.map((item) => {
        const id = item.url
          ? item.url.split("/")[item.url.split("/").length - 2]
          : -1;
        return (
          <Card
            sx={{ maxWidth: 345 }}
            key={item?.name}
            onClick={() => navigate(`/vehicles/${id}`)}
            className="item-card"
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.manufacturer}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  count of passengers: {item.passengers}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </CardListWrapper>
  );
}
