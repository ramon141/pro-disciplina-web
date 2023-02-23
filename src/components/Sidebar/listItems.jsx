import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarIcon from "../../assets/sidebar/calendar.svg";
import HomeIcon from "../../assets/sidebar/home.svg";
import RankingIcon from "../../assets/sidebar/ranking.svg";
import SearchIcon from "../../assets/sidebar/search.svg";

const classes = {
  itemButton: {
    minHeight: 48,
    px: 2.5,
  },
  itemIcon: {
    minWidth: 0,
    justifyContent: "center",
  },
  itemText: {
    color: "white",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "0.02em",
  },
};

export default function ListItems({ isOpen }) {
  const Item = ({ text, icon: Icon }) => (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          ...classes.itemButton,
          justifyContent: isOpen ? "initial" : "center",
        }}
      >
        <ListItemIcon sx={{ ...classes.itemIcon, mr: isOpen ? 1 : "auto" }}>
          {typeof Icon === "string" ? (
            <img src={Icon} width={20} alt="Ícone" />
          ) : (
            <Icon sx={{ color: "white" }} />
          )}
        </ListItemIcon>

        <ListItemText
          primary={text}
          sx={{ ...classes.itemText, opacity: isOpen ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  );

  return (
    <List style={{ marginLeft: isOpen ? 25 : 0 }}>
      <Item text={"Página Inicial"} icon={HomeIcon} />
      <Item text={"Buscar"} icon={SearchIcon} />
      <Item text={"Calendário"} icon={CalendarIcon} />
      <Item text={"Ranking"} icon={RankingIcon} />
    </List>
  );
}
