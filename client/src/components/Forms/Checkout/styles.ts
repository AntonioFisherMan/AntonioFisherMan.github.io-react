import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
        checkoutForm: {
            marginBottom: 84,
        },
        btnBlock: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 50,
        },
        headline: {
            marginBottom: 15,
        },
        select: {
            background: '#F7F8FC',
            maxWidth: '100%',
            height: 45,
            border: '1px solid #E9ECF0',
        },
        margin: {
            paddingRight: 30,
        },
    })
