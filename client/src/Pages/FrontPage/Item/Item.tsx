import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { H5 } from '../../../components/Typography/H5'
import { Subtitle1 } from '../../../components/Typography/Subtitle1'

const useStyles = makeStyles({
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyCntent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    img: {
        height: '100px',
    },
    headline: {
        marginTop: 51,
    },
    text: {
        marginTop: 37,
    },
    '@media (max-width: 600px)': {
        item: {
            marginTop: 30,
        },
        headline: {
            marginTop: 20,
        },
    },

})


const Item: React.FC<Props> = ({ img, text, headline }) => {
    const classes = useStyles()
    return (
        <Box className={classes.item}>
            <img src={img} alt="" className={classes.img} />
            <H5 text={headline} classes={classes.headline} />
            <Subtitle1 text={text} classes={classes.text} />
        </Box>
    )
}

type Props = {
    img: string,
    text?: string | undefined,
    headline?: string | undefined,
    icon?: boolean | undefined
}

export default Item
