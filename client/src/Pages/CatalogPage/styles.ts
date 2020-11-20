import { createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const styles = (theme: Theme) =>
    createStyles({
        linkBlock: {
            background: '#E9ECF0',
            height: 51,
            display: 'flex',
            alignItems: 'center',
        },
        select: {
            background: '#7ECB80',
            color: 'white',
            borderRadius: 3,
            width: 45,
            height: 31,
        },
        sortBtn: {
            textTransform: 'uppercase',
            color: '#111111',
            background: 'none',
        },
        catalog: {
            display: 'flex',
            marginBottom: '50',
        },
        catalogList: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginLeft: 30,
        },
        productsFilter: {
            marginTop: 51,
        },
        h5: {
            marginBottom: 25,
            fontWeight: 500,
        },
        headline: {
            marginTop: 20,
            marginLeft: 30,
        },
        sidebarMenu: {},
        '@media (max-width: 1024px)': {},
        '@media (max-width: 600px)': {
            catalogList: {
                marginLeft: 0,
            },
            filterIconClose: {
                position: 'absolute',
                right: 0,
                marginTop: 5,
                marginRight: 5,
            },
            h5: {
                textAlign: 'center',
            },
        },
    })

//
//

//

//     .checkbox {
//         display: none;
//     }

//     .fake {
//         position: relative;
//         display: inline-block;
//         border: 1px solid #E77E83;
//         width: 18px;
//         height: 18px;
//     }

//     .checkText {
//         padding-left: 11px;
//     }

//     .span {
//         color: #000000 !important;
//     }

//     .fake::after {
//         font-family: FontAwesome;
//         content: "\f00c";
//         color: #7ECB80;
//         font-size: 14px;
//         position: absolute;
//         transform: translate(20%, -10%);
//         transition: .2s;
//         opacity: 0;
//     }

//     .checkbox:checked+.fake::after {
//         opacity: 1;
//     }

//

//     .sidebarMenu label {
//         font-weight: 400;
//         font-size: 12px;
//         letter-spacing: 1.5px;
//         text-transform: uppercase;
//         color: #666666;
//     }

//
