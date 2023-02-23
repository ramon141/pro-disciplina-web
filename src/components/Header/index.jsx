import { AppBar, Grid, TextField, Toolbar } from "@mui/material";
import picUserImg from "../../assets/picture-user.png";
import logoImg from "../../assets/LOGO.svg";
import menuIconImg from "../../assets/menu-icon.svg";
import { classes } from "./styles.js";

export default function Header({ onHandleDrawer }) {
  return (
    <AppBar position="fixed" sx={classes.root} open={open}>
      <Toolbar>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          style={classes.rootGrid}
        >
          <Grid
            container
            item
            sm={9}
            md={9}
            lg={9}
            alignItems="center"
            spacing={3}
            style={classes.left}
          >
            <Grid
              item
              style={{ marginBottom: 3, cursor: "pointer" }}
              onClick={onHandleDrawer}
            >
              <img src={menuIconImg} width={23} />
            </Grid>

            <Grid item style={{ marginBottom: -5 }}>
              <img src={logoImg} width={30} />
            </Grid>

            <Grid
              item
              style={{
                fontFamily: "Comfortaa",
                marginTop: -9,
                fontSize: 20,
                fontWeight: 700,
                color: "#E5E5E5",
              }}
            >
              prodisciplina
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                InputProps={{ style: classes.inputPropsSearch }}
                sx={classes.inputSearch}
              />
            </Grid>
          </Grid>

          <Grid
            container
            item
            sm={1}
            md={1}
            lg={1}
            style={classes.right}
            alignItems="center"
            justifyContent="right"
          >
            <Grid item>
              <img src={picUserImg} width={30} />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
