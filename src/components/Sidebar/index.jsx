import { Grid, TextField } from "@mui/material";
import ufopaLogoImg from '../../assets/ufopa-logo.png';
import logoImg from '../../assets/LOGO.svg';
import menuIconImg from '../../assets/menu-icon.svg';

const classes = {
    root: {
        height: 57,
        backgroundColor: '#02121D',
        padding: '0px 27px',
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


export default function Sidebar() {

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
                    sm={8} md={8} lg={8}
                    alignItems='center'
                    spacing={3}
                    style={classes.left}
                >
                    <Grid item style={{ marginBottom: 3 }}>
                        <img src={menuIconImg} width={23} />
                    </Grid>

                    <Grid
                        container
                        item
                        sm={3.7} md={3.7} lg={3.7}
                        alignItems='center'
                        spacing={0.6}
                    >

                        <Grid item style={{ marginBottom: -5, }}>
                            <img src={logoImg} width={30} />
                        </Grid>

                        <Grid item
                            style={{
                                fontFamily: 'Comfortaa',
                                marginTop: -9,
                                fontSize: 20,
                                fontWeight: 700,
                                color: '#E5E5E5',
                            }}>
                            prodisciplina
                        </Grid>

                    </Grid>


                    <Grid>
                        <TextField
                            size='small'
                        />
                    </Grid>

                </Grid>

                <Grid
                    container
                    item
                    sm={4} md={4} lg={4}
                    style={classes.right}
                    alignItems='center'
                >

                </Grid>
            </Grid>
        </div>
    );

}