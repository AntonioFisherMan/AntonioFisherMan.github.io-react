import { createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const styles = (theme: Theme) =>
    createStyles({
        primary: {
            color: 'white',
            borderRadius: 50,
            '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.dark,
                fontWeight: 'bold',
            },
            fontSize: 12,
        },
        secondary: {
            textTransform: 'capitalize',
            borderRadius: 50,
            background: 'white',
            color: 'black',
            '&:hover': {
                color: theme.palette.primary,
                fontWeight: 'bold',
                background: 'none',
            },
        },
        icon: {
            fontSize: 12,
        },
        wrapper: {
            margin: theme.spacing(1),
            position: 'relative',
        },
        buttonProgress: {
            position: 'absolute',
            top: '0',
            left: '40%',
        },
    })
