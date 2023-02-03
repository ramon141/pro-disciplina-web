
import backgroundImg from '../../assets/background-login.png';

export const classes = {
    root: {
        backgroundImage: `url("${backgroundImg}")`,
        height: '100vh',
    },
    formArea: {
        paddingLeft: 80,
        paddingTop: 80
    },
    label: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '11px',

        letterSpacing: '0.02em',

        color: 'rgba(255, 255, 255, 0.6)'
    },
    loginMsg: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '40px',
        letterSpacing: '0.02em',
        color: '#FFFFFF',
    },
    registerLabel: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '11px',

        letterSpacing: '0.02em',

        color: 'rgba(255, 255, 255, 0.6)'
    },
    field: {
        background: '#02121D',
        boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.12)',
        borderRadius: '11px',
        color: 'white',
        '& label.Mui-focused': {
            borderRadius: '11px',
            color: '#16DB65',
        },
        '& .MuiInput-underline:after': {
            color: 'white',
            borderRadius: '11px',
            borderBottomColor: '#16DB65',
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',
            borderRadius: '11px',
            '& fieldset': {
                borderRadius: '11px',
                borderColor: 'rgba(255, 255, 255, 0)',
            },
            '&:hover fieldset': {
                borderRadius: '11px',
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderRadius: '11px',
                borderColor: '#16DB65',
                borderWidth: '1px'
            },
        },
        '& .MuiInputBase-inputSizeSmall': {
            color: 'white'
        },
        '& .MuiFormLabel-root': {
            color: 'rgba(255, 255, 255, 0.43)'
        }

    },
    auth: {
        background: '#16DB65',
        boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.12)',
        borderRadius: '50px',
        color: '#02121D',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '17px',
        letterSpacing: '0.02em',
        lineHeight: '33px',
        textTransform: 'none'
    },
    consulte: {
        background: '#052033',
        boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.12)',
        borderRadius: '50px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '17px',
        lineHeight: '33px',
        letterSpacing: '0.02em',
        color: '#FFFFFF',
        textTransform: 'none'
    }

}