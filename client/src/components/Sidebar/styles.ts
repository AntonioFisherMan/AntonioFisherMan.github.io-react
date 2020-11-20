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
            color: 'grey',
        },
        greyText: {
            marginLeft: 8,
        },
        '@media (max-width: 860px)': {
            sidebar: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            },
            sidebarText: {
                textAlign: 'center',
            },
        },
    })
