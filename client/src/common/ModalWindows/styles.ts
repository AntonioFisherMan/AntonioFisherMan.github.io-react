import { createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const styles = (theme: Theme) =>
    createStyles({
        title: {
            color: theme.palette.success.light,
            textAlign: 'center',
        },
        text: {
            color: theme.palette.success.dark,
        },
        img: {
            display: 'flex',
            justifyContent: 'center',
        },
        inform: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },

        '@media (max-width: 1024px)': {},
    })
