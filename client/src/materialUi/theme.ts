import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { font } from '../assets/fonts/Montserrat/font'

let themee = createMuiTheme({
    palette: {
        primary: {
            light: '#ffafb2',
            main: '#e77e83',
            dark: '#b24f56',
            contrastText: '#000',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#e77e83',
        },
        grey: {
            A700: '#979797',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        caption: {
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: '3.125rem',
        },
        h6: {
            fontWeight: 600,
            fontSize: '15px',
        },
        h5: {
            fontWeight: 700,
            fontSize: '20px',
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '24px',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [font],
            },
        },
        MuiButton: {
            root: {
                width: 164,
                height: 50,
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 1,
            },
            sizeSmall: {
                width: 128,
                height: 45,
            },
            sizeLarge: {
                width: 227,
                height: 55,
            },
        },
        MuiOutlinedInput: {
            notchedOutline: {
                border: '1px solid',
                borderColor: '#F7F8FC',
            },
        },
    },
})
export const theme = responsiveFontSizes(themee)
