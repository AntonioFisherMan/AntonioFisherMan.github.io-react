import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
        headline: {
            marginTop: 35,
            marginBottom: 12,
        },
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
            width: 285,
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
    })

// @media (max-width: 57598px) :{
//     cardLink, cardItem:{
//         display: none;
//     }

//     cardList:{
//         display: flex;
//         flex-direction: column-reverse;
//     }
//     cardText, cardInformText :{
//         display: flex;
//         justifyContent: center;
//         text-align: left;
//         margin-left: 10px;
//         flex-direction: column;
//     }
//     cardInformText p:{
//         text-align: center;
//         padding-bottom: 20px;
//     }
//     cardActive:{
//         display: flex !important;
//     }
//     cardLinkActive:{
//         display: block !important;
//         background: #E9EBF0;
//         marginTop: 20px;
//     }
//     cardLinkActive p:first-child:{
//         min-height: 230px;
//     }
//     cardLinkActive p:last-child:{
//         min-height: 50px;
//     }
//     cardLinkActive p:nth-child(2):{
//         min-height: 50px;
//     }
//     cardLinkActive p:{
//         display: flex;
//         justifyContent: center;
//         align-items: center;
//         text-align: center;
//     }
//     cardPhotoActive:{
//         border: 1px solid #EFEFEF !important;
//         width: 180px;
//         height: 225px;
//     }
//     cardActiveInform:{
//         min-height: 230px;
//     }
//     cardPrice:{
//         min-height: 50px;
//         display: flex;
//         justifyContent: center;
//         align-items:center;
//     }
// }
