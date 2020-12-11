import { createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const styles = (theme: Theme) =>
    createStyles({
        title: {
            color: theme.palette.success.light,
            textAlign: 'center',
        },
        text: {
            color: theme.palette.grey[800],
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

        '@media (max-width: 600px)': {
            img: {
                height: 200,
                width: 150,
                margin: '0 auto',
            },
            btnBlock: {
                flexDirection: 'column',
            },
            modal: {},
            text: {
                fontSize: 12,
            },
            title: {
                padding: 0,
            },
            btn: {
                height: 40,
                width: 150,
            },
        },
    })
