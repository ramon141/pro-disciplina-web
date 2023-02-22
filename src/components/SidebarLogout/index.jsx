import { Grid, Hidden, Paper } from "@mui/material";
import ufopaLogoImg from "../../assets/ufopa-logo.png";
import logoImg from "../../assets/LOGO.svg";
import { Box } from "@mui/system";

const classes = {
  root: {
    height: 57,
    backgroundColor: "#02121D",
    padding: "0px 7%",
  },
  rootGrid: {
    color: "white",
  },
  left: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "36px",
    color: "#FFFFFF",
  },
  lblUniversity: {
    width: "100%",
    flexWrap: "none",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 12,
    display: {
      xs: "none",
      sm: "block",
      md: "block",
      lg: "block",
    },
  },
};

export default function SidebarLogout() {
  return (
    <div style={classes.root}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        style={classes.rootGrid}
      >
        <Grid
          container
          item
          xs={6}
          sm={3}
          md={3}
          lg={3}
          alignItems="center"
          style={classes.left}
        >
          <Grid item style={{ marginBottom: -10 }}>
            <img src={logoImg} width={30} />
          </Grid>

          <Grid item style={{ fontFamily: "Comfortaa" }}>
            prodisciplina
          </Grid>
        </Grid>

        <Grid container item xs={4} sm={4} md={4} lg={4} alignItems="center">
          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            lg={5}
            style={{ textAlign: "center" }}
          >
            <Box
              component="img"
              alt="UFOPA Logo"
              sx={{ height: { xs: 50, sm: 60, md: 60 } }}
              src={ufopaLogoImg}
            />
          </Grid>

          <Grid item sm={5} md={5} lg={5} sx={classes.lblUniversity}>
            Universidade Federal do Oeste do Pará
            <hr />
            UFOPA
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
