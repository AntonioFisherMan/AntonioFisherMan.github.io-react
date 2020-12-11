import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
        headline: {
            marginBottom: 20,
            marginLeft: 10,
        },
        sidebar: {
            width: 200,
            height: 300,
            background: '#F7F8FC',
            border: '1px solid #E9ECF0',
            boxSizing: 'border-box',
            padding: '15px 12px',
        },
        sidebarItem: {
            display: 'flex',
            marginBottom: 27,

            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 15,
            color: '#707070',
        },
        greyText: {
            marginLeft: 8,
        },
        btn: {
            display: 'flex',
            alignItems: 'flex-end',
            marginTop: 66,
            whiteSpace: 'nowrap',
        },
        '@media (max-width: 960px)': {
            sidebar: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 15,
            },
            sidebarText: {
                textAlign: 'center',
            },
        },
        '@media (max-width: 600px)': {
            sidebar: {
                marginBottom: 15,
            },
        },
    })
