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
    })
