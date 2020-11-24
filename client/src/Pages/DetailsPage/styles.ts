import { createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const styles = (theme: Theme) =>
    createStyles({
        table: {
            width: 120,
        },
        tableText: {
            flex: '0 0 auto',
        },
        list: {
            width: 100,
            alignItems: 'flex-start',
        },
        detailsPhoto: {
            width: 321,
            height: 750,
        },
        pinkText: {
            fontSize: 10,
        },
        listStars: {
            marginTop: 15,
            marginBottom: 17,
            display: 'flex',
        },
        greyText: {
            marginLeft: 21,
        },
        priceLine: {
            textDecorationLine: 'line-through',
        },
        price: {
            marginBottom: 20,
        },
        h6: {
            marginTop: 20,
            marginBottom: 17,
            fontWeight: 600,
            fontSize: 15,
        },
        selectBlock: {
            display: 'flex',
        },
        selectIcon: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 21,
        },
        greyText2: {
            marginLeft: 5,
        },
        selectSize: {
            width: 211,
            height: 45,
            background: '#F7F8FC',
            border: '1px solid #E9ECF0',
        },
        h6sec: {
            fontWeight: 700,
            marginTop: 20,
            marginBottom: 7,
            display: 'flex',
        },
        greyText3: {
            fontSize: 12,
            fontWeight: 600,
            color: '#666666',
            textTransform: 'uppercase',
            marginLeft: 10,
        },
        informListRentalBlock: {
            display: 'flex',
            marginLeft: 7,
        },
        informListDate: {
            display: 'flex',
        },
        dateField: {
            marginRight: 18,
        },
        dateFieldText: {
            marginBottom: 14,
        },
        informListTextArea: {
            display: 'flex',
            marginTop: 19,
            marginBottom: 23,
            color: '#676767',
        },
        styleBlock: {
            marginTop: 25,
            marginBottom: 71,
        },
        styleHeadline: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 50,
        },
        styleBtn: {
            marginTop: 69,
        },
        reviewItem: {
            display: 'flex',
            marginTop: 31,
        },
        reviewInform: {
            display: 'flex',
            justifyContent: 'flex-end',
            borderBottom: '1px solid #EFEFEF',
            paddingBottom: 30,
        },
        reviewImgBlock: {
            marginRight: 19,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        reviewImg: {
            width: 59,
            height: 59,
        },
        reviewList: {
            display: 'flex',
            textAlign: 'center',
        },
        reviewText: {
            display: 'flex',
            marginLeft: 25,
        },
        reviewCard: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderBottom: '1px solid #EFEFEF',
            paddingBottom: 30,
        },
        reviewPinkText: {
            marginBottom: 15,
        },
        reviewRating: {
            marginTop: 80,
            marginBottom: 30,
        },
        reviewInforDetails: {
            flexDirection: 'column',
            display: 'flex',
        },
        reviewBtn: {},
        '@media (max-width: 887px)': {
            reviewItem: {
                justifyContent: 'center',
            },
            reviewInform: {
                borderBottom: 'none',
                paddingBottom: 0,
                marginBottom: 20,
            },
            reviewBtn: {
                width: '100%',
                borderRadius: 50,
                color: '#111111',
            },
        },
    })
