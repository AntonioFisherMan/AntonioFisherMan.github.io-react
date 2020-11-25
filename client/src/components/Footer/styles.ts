import { createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const styles = (theme: Theme) =>
    createStyles({
        footerItem: {
            marginTop: 57,
            marginBottom: 50,
        },
        headlinePink: {
            marginTop: 57,
            marginBottom: 19,
            fontWeight: 500,
            fontSize: 18,
        },
        footerBottom: {
            background: '#F8F5F3',
            height: 75,
            display: 'flex',
            alignItems: 'center',
        },

        link: {
            color: '#707070',
            fontWeight: 400,
            fontSize: 14,
            display: 'block',
            marginBottom: 16,
        },
        headline: {
            fontWeight: 500,
            marginBottom: 39,
            fontSize: 18,
        },
        margin: {
            marginBottom: 10,
        },
        '@media (max-width:960px) ': {
            footerForm: {
                marginTop: 19,
                flexDirection: 'column',
                alignItems: 'center',
            },
            footerItem: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 10,
            },
        },
        '@media (max-width:600px) ': {
            link: {
                marginBottom: 6,
            },
            headline: {
                marginBottom: 19,
            },
            footerItem: {
                marginTop: 10,
                marginBottom: 10,
            },
            headlinePink: {
                marginTop: 17,
            },
        },
    })
