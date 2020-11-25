import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
        cardLink: {
            height: 45,
            background: '#E9EBF0',
            marginTop: 22,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        cardBlock: {
            marginBottom: 32,
        },
        cardItem: {
            borderBottom: '1px solid #EEEEEE',
            marginTop: 30,
            position: 'relative',
        },
        cardPhoto: {
            border: '1px solid #EFEFEF',
            boxSizing: 'border-box',
            transform: 'matrix(-1, 0, 0, 1, 0, 0)',
            width: '100%',
            maxWidth: 285,
            height: 345,
            marginBottom: 32,
        },
        cardSlogan: {
            marginBottom: 7,
        },
        cardList: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        plusBlock: {
            display: 'flex',
        },
        cardDiscount: {
            display: 'flex',
            marginTop: 33,
        },
        cardDiscountIcon: {
            marginRight: 20,
            display: 'flex',
            alignItems: 'flex-start',
        },
        cardDiscountText: {
            marginLeft: 10,
        },
        cardExtraText: {
            display: 'flex',
            alignItems: 'center',
            padding: '25px 20px',
            background: '#F7F8FC',
            marginTop: 28,
        },

        cardInform: {
            marginTop: 36,
        },
        tip: {
            paddingLeft: 40,
            display: 'flex',
        },

        cardInformListText: {
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
        },
        center: {
            display: 'flex',
            justifyContent: 'center',
        },
        closeIcon: {
            position: 'absolute',
            right: 0,
            top: 0,
        },
        totalPrice: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: 23,
        },
        totalText: {
            marginTop: 13,
            display: 'flex',
        },
        link: {
            height: 0,
        },
        '@media (max-width: 600px)': {
            cardActive: {
                display: 'flex',
                position: 'relative',
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
            cardPhotoActive: {
                width: 100,
                height: 200,
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
