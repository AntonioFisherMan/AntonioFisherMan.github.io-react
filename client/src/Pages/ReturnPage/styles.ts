import { Theme, createStyles } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
        returnBlock: {},
        returnText: {
            marginTop: 50,
        },
        returnLinks: {
            display: 'flex',
            alignItems: 'center',
            background: '#E9EBF0',
            height: 45,
            marginTop: 15,
        },
        returnItem: {
            marginTop: 15,
            marginBottom: 20,
        },
        returnItemColumn: {
            display: 'flex',
        },

        '@media (max-width: 600px)': {
            orders: {
                display: 'flex',
                flexDirection: 'column',
            },

            cardActive: {
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
            },
            cardLinkActive: {
                display: 'block',
                background: '#E9EBF0',
            },
            cardActiveInform: {
                minHeight: 330,
                display: 'flex',
            },
            cardActiveItem: {
                marginTop: 10,
            },

            p1: {
                minHeight: 330,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            p2: {
                minHeight: 50,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            },
            p3: {
                minHeight: 50,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            },
            p4: {
                minHeight: 50,
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            },
            cardBlock: {
                display: 'flex',
                flexDirection: 'column-reverse',
            },
            cardInformList: {
                display: 'flex',
                flexDirection: 'column-reverse',
            },
            boxActive: {
                marginBottom: 20,
            },
        },
    })
