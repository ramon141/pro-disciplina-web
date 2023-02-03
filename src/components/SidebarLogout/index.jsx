import { Grid } from "@mui/material";
import ufopaLogoImg from '../../assets/ufopa-logo.png';
import logoImg from '../../assets/LOGO.svg';

const classes = {
    root: {
        height: 57,
        backgroundColor: '#02121D',
        padding: '0px 83px',
    },
    rootGrid: {
        color: 'white'
    },
    left: {
        fontFamily: 'Comfortaa',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '36px',
        color: '#FFFFFF',
    },
    right: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 12

    }
}


export default function SidebarLogout() {

    return (
        <div style={classes.root}>
            <Grid
                container
                justifyContent='space-between'
                alignItems='center'
                style={classes.rootGrid}
            >
                <Grid
                    container
                    item
                    sm={3} md={3} lg={3}
                    alignItems='center'
                    style={classes.left}
                >
                    <Grid item style={{ marginBottom: -10 }}>
                        <img src={logoImg} width={30} />
                    </Grid>

                    <Grid item style={{ fontFamily: 'Comfortaa' }}>
                        prodisciplina
                    </Grid>
                </Grid>

                <Grid
                    container
                    item
                    sm={4} md={4} lg={4}
                    style={classes.right}
                    alignItems='center'
                >
                    <Grid item sm={6} md={6} lg={6}>
                        <img width={60} src={ufopaLogoImg} />
                    </Grid>

                    <Grid item sm={6} md={6} lg={6}>
                        Universidade Federal do Oeste do Pará
                        <hr />
                        UFOPA
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

}
