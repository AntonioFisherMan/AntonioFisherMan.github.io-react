import { createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const styles = (theme: Theme) =>
    createStyles({
        introBlock: {
            backgroundImage: "url('/images/MenuBackground.jpg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
        },
        introText: {
            marginTop: 192,
            textAlign: 'left',
            color: 'white',
        },
        text: {
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 67,
            fontWeight: 300,
            textAlign: 'left',
        },
        headline: {
            marginTop: 51,
        },
        worksItems: {
            marginTop: 81,
        },
        icon: {
            position: 'relative',
            bottom: 200,
            left: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#7ECB80',
            borderRadius: '50%',
            width: 50,
            height: 50,
            color: 'white',
        },
        sliderBlock: {
            marginTop: 40,
            marginBottom: 60,
        },
        benefitsText: {
            marginTop: 20,
            marginBottom: 86,
        },
        benefitsBtn: {
            marginTop: 50,
        },
        sliderBlock2: {
            marginTop: 58,
            marginBottom: 30,
        },
        followText: {
            marginBottom: 74,
        },

        '@media (max-width: 1024px)': {
            introText: {
                margin: '0 auto',
                marginTop: 51,
                fontSize: 55,
                textAlign: 'center',
            },
            text: {
                textAlign: 'center',
            },
            galleryText: {
                marginBottom: 20,
            },
            worksBlock: {
                marginTop: 50,
            },
        },
        '@media (max-width: 600px)': {
            worksItems: {
                marginBottom: 31,
                marginTop: 10,
            },
            benefitsText: {
                marginBottom: 16,
            },
            benefitsBtn: {
                marginTop: 20,
            },
        },
    })
