import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Header from "../Header";
import ListItems from "./listItems";
import ufopaLogoImg from "../../assets/ufopa-logo.png";
import { Grid } from "@mui/material";

const drawerWidth = 264;

const openedMixin = (theme) => ({
  backgroundColor: "#02121D",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "#02121D",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "red",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ children }) {
  const [open, setOpen] = React.useState(false);

  const toogleDrawer = () => setOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Header onHandleDrawer={toogleDrawer} />

      <Drawer
        variant="permanent"
        open={open}
        sx={{ "& .MuiPaper-elevation": { marginTop: 10 } }}
      >
        <Divider />

        <ListItems isOpen={open} />

        <Grid
          container
          justifyContent={open ? "center" : "left"}
          style={{
            position: "absolute",
            bottom: 100,
            textAlign: "center",
            padding: open ? 20 : 5,
            color: "white",
          }}
        >
          <Grid item xs={4} sm={4} md={4} style={{ marginTop: -5 }}>
            <img src={ufopaLogoImg} width={open ? 60 : 50} />
          </Grid>

          <Grid
            item
            xs={5.5}
            sm={5.5}
            md={5.5}
            sx={{
              whiteSpace: "normal",
              display: open ? "block" : "none",
              fontSize: 10,
            }}
          >
            <span>Universidade Federal do Oeste do Pará</span>
            <hr />
            UFOPA
          </Grid>
        </Grid>
      </Drawer>

      <Box
        component="main"
        sx={{
          padding: 3.2,
          marginTop: 7,
          width: "100%",
          backgroundColor: "#F3EFF5",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
