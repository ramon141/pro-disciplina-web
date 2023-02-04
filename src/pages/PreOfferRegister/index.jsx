import { Typography, Grid, Box, TextField, Autocomplete, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { api } from "../../services/api";


const classes = {
    root: {
        padding: 30
    },
    instituteLabel: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '25px',
        lineHeight: '48px',

        letterSpacing: '0.01em',

        color: '#02121D',
    },
    instituteButton: {
        color: 'white',
        background: '#02121D',
        borderWidth: '1px 1px 1px 0px',
        borderStyle: 'solid',
        borderColor: '#4F4F54',
        borderRadius: '0px',
        padding: '10px 20px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '15px',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#D9D9D9',
            color: '#02121D'
        },
    },
    auth: {
        background: '#16DB65',
        boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.12)',
        borderRadius: '50px',
        color: '#02121D',
        fontFamily: 'Roboto',
        padding: '5px 50px',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '17px',
        letterSpacing: '0.02em',
        lineHeight: '33px',
        textTransform: 'none'
    }
}

export default function PreOfferRegister() {


    const [period, setPeriod] = useState(null);
    const [lastRent, setLastRent] = useState();
    const [isProDiscipline, setIsProDiscipline] = useState(null);
    const [shift, setShift] = useState(null);
    const [disciplineChoiced, setDisciplineChoiced] = useState(null);
    const [teamChoiced, setTeamChoiced] = useState(null);

    const [disciplines, setDisciplines] = useState([]);
    const [teams, setTeams] = useState([]);
    const [institutes, setInstitutes] = useState([]);


    useEffect(() => {
        api.get('disciplines').then((response) => {
            // setDisciplines(response.data);
            setDisciplines([
                { id: 1, name: 'BD', menu: 'Uma ementa', workload: 40 },
                { id: 2, name: 'BDII', menu: 'Uma ementa 2', workload: 60 },
                { id: 3, name: 'BDIII', menu: 'Uma ementa 3', workload: 80 }
            ]);
        });

        api.get('teams').then((response) => {
            // setTeams(response.data);
            setTeams([
                { id: 1, "entry_year": 2020, "ppcId": 1 },
                { id: 2, "entry_year": 2019, "ppcId": 1 },
                { id: 3, "entry_year": 2018, "ppcId": 1 },
            ])
        });

        api.get('institutes').then((response) => {
            // setInstitutes(response.data);

            setInstitutes([
                { id: 1, "name": "Insituto de Engenharia", "acronym": "IEG" },
                { id: 2, "name": "Biologia", "acronym": "IBEF" },
                { id: 3, "name": "Insituto do professor", "acronym": "ICED" },
            ]);

        });


        const data = {
            order: 'start_request DESC',
            limit: 1
        };

        api.get(`rents?filter=${JSON.stringify(data)}`).then((response) => {
            // setLastRent(response.data[0].id);
            setLastRent({
                "start_request": "2023-02-04T01:13:59.259Z",
                "id": 1,
                "finish_request": "2023-02-04T01:13:59.259Z",
                "start_indication": "2023-02-04T01:13:59.259Z",
                "finish_indication": "2023-02-04T01:13:59.259Z"
            });
        });

    }, [])

    const post = () => {
        const data = {
            date: "2023-02-03T21:26:22.911Z",
            is_pro_discipline: isProDiscipline === 'Sim' ? 1 : 0,
            shift: shift.substring(0, 1),
            period: period.substring(0, 1),
            professorId: "123",
            disciplineId: disciplineChoiced.id,
            teamId: teamChoiced.id,
            rentId: lastRent.id
        };

        api.post('pre-offers', data).then((response) => {
            alert('Pré Oferta cadastrada com sucesso!')
        })
    }


    const autocompleteFormated = (value, label, onChange, options, getOptionLabel) => {
        return (
            <Autocomplete
                value={value}
                label={label}
                options={options}
                getOptionLabel={getOptionLabel}
                renderInput={(params) => <TextField {...params} label={label} />}
                onChange={(event, newValue) => {
                    console.log(newValue)
                    onChange(newValue)
                }}
                size='small'
            />
        )
    }

    return (
        <div >
            <Sidebar />


            <Grid
                container
                style={classes.root}
            >
                <Grid item xs={12} sm={12} lg={12}>
                    <Typography style={classes.instituteLabel}>
                        Institutos
                    </Typography>
                </Grid>

                {
                    institutes.map((institute, index) => (
                        <Box
                            key={index}
                            sx={index !== 0 ? classes.instituteButton : { ...classes.instituteButton, borderRadius: '5px 0 0 5px', backgroundColor: '#D9D9D9', color: '#02121D' }}
                        >
                            {institute.acronym}
                        </Box>
                    ))
                }

                <Grid item xs={12} sm={12} lg={12}>
                    <Typography style={classes.instituteLabel}>
                        Criar Solicitações
                    </Typography>
                </Grid>

                <Grid container item xs={12} sm={12} lg={12} spacing={2}>
                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        {autocompleteFormated(
                            disciplineChoiced,
                            'Disciplina',
                            setDisciplineChoiced,
                            disciplines,
                            (value) => { return value?.name || 'Selecione uma Opção' })}
                    </Grid>

                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        {autocompleteFormated(teamChoiced,
                            'Turma',
                            setTeamChoiced,
                            teams,
                            (value) => { return String(value?.entry_year || 'Selecione uma Opção') })
                        }
                    </Grid>

                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        {autocompleteFormated(shift,
                            'Turno',
                            setShift,
                            ['Matutino', 'Vespertino', 'Noturno'],
                            (value) => { return value || 'Selecione uma Opção' })
                        }
                    </Grid>

                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        {autocompleteFormated(isProDiscipline,
                            'É pré oferta?',
                            setIsProDiscipline,
                            ['Sim', 'Não'],
                            (value) => { return value || 'Selecione uma Opção' })
                        }
                    </Grid>

                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        {autocompleteFormated(period,
                            'Período',
                            setPeriod,
                            ['Blocado', 'Semestre Completo'],
                            (value) => { return value || 'Selecione uma Opção' })
                        }
                    </Grid>

                    <Grid container item justifyContent='center' xs={12} sm={12} md={12} lg={12}>
                        <Grid item>

                            <Button
                                onClick={post}
                                style={classes.auth}
                            >
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>


        </div>
    );

}