import React from "react";

import { ListItemText, Divider, ListItem, List } from "@mui/material";

import { CardWrapper } from "./styles";

export default function Cart({
  title,
  subtitle,
  withoutBorder,
}: {
  title: string;
  subtitle?: string;
  withoutBorder?: boolean;
}) {
  return (
    <CardWrapper>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText
            primary={title}
            secondary={subtitle || ""}
            primaryTypographyProps={{
              fontSize: 28,
              color: "#979494",
            }}
            secondaryTypographyProps={{
              fontSize: 18,
              color: "#000",
            }}
          />
        </ListItem>
        {!withoutBorder && (
          <Divider variant="inset" component="li" className="card-liner" />
        )}
      </List>
    </CardWrapper>
  );
}
