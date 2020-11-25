import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
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
            width: '90%',
            maxWidth: 180,
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
        item__btn: {
            color: 'white',
            fontSize: 10,
            borderRadius: 50,
            width: '100%',
        },
        orders__itemActive: {
            display: 'none !important',
        },
        '@media (max-width: 600px)': {
            orders: {
                display: 'flex',
                flexDirection: 'column',
            },

            item__btn: {
                width: '100%',
            },
            item__btnBlock: {
                width: 150,
                marginTop: 10,
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
                minHeight: 230,
                display: 'flex',
            },
            cardActiveItem: {
                marginTop: 10,
            },
            orderActive: {
                marginBottom: 20,
                borderBottom: '1px solid #E9EBF0',
                paddingBottom: 5,
            },
            cardPhotoActive: {
                width: '100%',
                height: 200,
            },
            cardPhotoActiveBlock: {
                display: 'flex',
                justifyContent: 'center',
            },
            p1: {
                minHeight: 230,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            p2: {
                minHeight: 50,
                textAlign: 'center',
            },
            p3: {
                minHeight: 50,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            },
            cardDiscount: {
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            },
            cardBlock: {
                display: 'flex',
                flexDirection: 'column-reverse',
            },
            cardInformList: {
                display: 'flex',
                flexDirection: 'column-reverse',
            },
            linkBlock: {
                display: 'flex',
                justifyContent: 'center',
            },
            link: {
                fontWeight: 'normal',
                fontSize: 15,
                marginTop: 10,
            },
        },
    })
