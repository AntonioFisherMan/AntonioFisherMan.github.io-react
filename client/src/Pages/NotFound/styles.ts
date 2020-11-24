import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    notfound: {
        height: 400,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {},
    headline: {
        fontFamily: 'Raleway',
        fontSize: 168,
        margin: 0,
        color: '#ff508e',
        textTransform: 'uppercase',
        marginBottom: 70,
    },
    h4: {
        fontFamily: 'Raleway',
        fontSize: 22,
        fontWeight: 400,
        textTransform: 'uppercase',
        color: '#222',
        margin: 0,
    },

    link: {
        display: 'inline-block',
        fontWeight: 700,
        borderRadius: 15,
        textDecoration: 'none',
        color: '#39b1cb',
    },
    arrow: {
        position: 'relative',
        top: -2,
        border: 'solid #39b1cb',
        borderWidth: '0 3px 3px 0',
        display: 'inline-block',
        padding: 3,
        transform: 'rotate(135deg)',
        marginTop: 30,
    },
    '@media only screen and (max-width: 767px)': {
        text: {
            marginBottom: 20,
        },
        headline: {
            fontSize: 122,
        },
    },
})
