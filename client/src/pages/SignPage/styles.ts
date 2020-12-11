import { createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const styles = (theme: Theme) =>
    createStyles({
        signBlock: {
            marginBottom: 55,
        },
        signForm: {},
        signReturnBlock: {
            marginTop: 192,
        },
        text: {
            marginBottom: 10,
            marginTop: 5,
        },
        '@media (max-width: 960px)': {
            signForm: {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 30,
            },
            signBlock: {
                marginTop: 10,
            },
        },
    })
