import { createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const styles = (theme: Theme) =>
    createStyles({
        ourProducts: {
            marginBottom: 71,
        },
        linkBlock: {
            background: '#E9ECF0',
            height: 51,
            display: 'flex',
            alignItems: 'center',
        },
        linkItem: {
            display: 'flex',
            alignItems: 'center',
        },
        select: {
            background: '#7ECB80',
            color: 'white',
            borderRadius: 3,
            paddingRight: 14,
            paddingLeft: 10,
            fontWeight: 600,
            marginLeft: 10,
        },
        selectIcon: {
            color: 'white',
        },
        sortIcon: {
            color: '#111111',
            paddingLeft: 5,
        },
        sortBtn: {
            textTransform: 'uppercase',
            color: '#111111',
            background: 'none',
            backgroundColor: 'none',
            fontSize: 12,
            fontWeight: 600,
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
        chip: {
            marginBottom: 5,
            marginRight: 5,
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
        '@media (max-width: 960px)': {},
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
