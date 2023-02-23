import { Grid } from "@mui/material";
import react, { useState } from "react";
import AreaNotifications from "../../components/Home/AreaNotifications";
import Calendar from "../../components/Home/Calendar";
import Demands from "../../components/Home/Demands";

const classes = {
  lblWelcome: {
    marginTop: 50,
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "38px",
    lineHeight: "42px",
    color: "#02121D",
  },
};

export default function Home() {
  const [notifications, setNotification] = useState([]);
  const [events, setEvents] = useState([]);

  return (
    <Grid container spacing={3}>
      <Grid spacing={2} container item xs={12} sm={12} md={4.3} lg={4.3}>
        <Grid item xs={12} md={12} style={classes.lblWelcome}>
          Welcome, Vânia
        </Grid>
        <Grid item xs={12} md={12}>
          <AreaNotifications notifications={notifications} />
        </Grid>
      </Grid>

      <Grid spacing={2} container item xs={12} sm={12} md={7.7} lg={7.7}>
        <Grid item xs={12} md={12}>
          <Calendar events={events} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Demands />
        </Grid>
      </Grid>
    </Grid>
  );
}
