import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
        feedbackBlock: {
            marginBottom: 53,
        },
        linksBlock: {
            background: '#E9EBF0',
            height: 45,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },
        feedbackList: {
            marginTop: 44,
        },
        feedbackItem: {
            position: 'relative',
            marginTop: 30,
        },
        feedbackItemImg: {
            border: '1px solid #EFEFEF',
            boxSizing: 'border-box',
            width: '90%',
            height: 225,
        },
        textBox: {
            marginTop: 20,
        },
        text: {
            marginBottom: 10,
        },
        feedbackItemColumn2: {
            position: 'relative',
        },
        feedbackItemActive: {
            display: 'none',
        },
        feedbackListActive: {
            display: 'none',
        },
        closeIcon: {
            position: 'absolute',
            right: 0,
            top: 0,
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
                minHeight: 250,
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
                minHeight: 250,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            p2: {
                minHeight: 150,
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
