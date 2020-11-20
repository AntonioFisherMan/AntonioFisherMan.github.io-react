import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
    createStyles({
        headline: {
            marginTop: 35,
            marginBottom: 21,
        },
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
            marginTop: 30,
        },
        feedbackItemImg: {
            border: '1px solid #EFEFEF',
            boxSizing: 'border-box',
            width: 180,
            height: 225,
        },
        textBox: {
            marginTop: 20,
        },
        feedbackItemActive: {
            display: 'none',
        },
        feedbackListActive: {
            display: 'none',
        },
    })

/******* FEEADBACK PAGE *******/

//     @media (max-width: 575.98px) {
//         .feedbackList, .feedbackItem{
//             display: none;
//         }
//        .feedbackInform{
//            display: block;
//        }
//        .feedbackItem-active, .feedbackList-active{
//            display: flex;
//        }
//     }

//     @media (min-width: 576px) and (max-width: 767.98px) {
//         .feedbackList, .feedbackItem{
//             display: none;
//         }
//         .feedbackInform{
//             display: block;
//         }
//         .feedbackList-active{
//             display: flex;
//         }
//     }
