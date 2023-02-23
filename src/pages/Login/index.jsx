import Header from "../../components/HeaderLogout";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { classes } from "./styles";

export default function Login() {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [siape, setSiape] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Header />

      <div style={classes.root}>
        <div style={classes.formArea}>
          <Grid container spacing={0.7}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={classes.label}>
              AMPLIANDO A FORÇA DA EDUCAÇÃO
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} style={classes.loginMsg}>
              Autenticar coordenação
              <span style={classes.dot}>.</span>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={classes.registerLabel}
            >
              Já é um membro?
              <span style={{ color: "#16DB65" }}>&nbsp;Log In</span>
            </Grid>
          </Grid>

          <Grid
            item
            container
            spacing={3}
            justifyContent="center"
            style={{ marginTop: 0 }}
            xs={10.5}
            sm={9}
            md={6}
            lg={5}
          >
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                sx={classes.field}
                label="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                sx={classes.field}
                label="Sobrenome"
                onChange={(e) => setSecondName(e.target.value)}
                value={secondName}
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                sx={classes.field}
                label="Matrícula Siape"
                onChange={(e) => setSiape(e.target.value)}
                value={siape}
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                sx={classes.field}
                label="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                sx={classes.field}
                label="Senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Button
                onClick={() => alert("Submetido")}
                style={classes.consulte}
                fullWidth
              >
                Consultar
              </Button>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Button
                onClick={() => alert("Submetido")}
                style={classes.auth}
                fullWidth
              >
                Autenticar
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
