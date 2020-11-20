import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
        headline: {
            marginTop: 35,
            marginBottom: 21,
        },
        ordersBlock: {
            marginLeft: 25,
            display: 'flex',
            flexDirection: 'column',
        },
        linkBlock: {
            background: '#E9EBF0',
            height: 45,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            marginTop: 45,
            marginBottom: 30,
        },
        center: {
            textAlign: 'center',
        },
        centerAlign: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        orders__photo: {
            border: '1px solid #EFEFEF',
            width: 180,
            height: 225,
        },
        orders__item: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            marginBottom: 29,
            paddingBottom: 30,
            borderBottom: '1px solid #E9EBF0',
        },
        item__btnBlock: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        },
        item__btn: {},
        orders__itemActive: {
            display: 'none !important',
        },
    })
