import { Box, Container, Grid, Breadcrumbs, makeStyles, Link } from '@material-ui/core'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'


const useStyles = makeStyles({
    linkBlock: {
        display: 'flex',
        alignItems: 'center',
        height: 51,
        background: '#E9ECF0',
    },
    linkInform: {

    },
    li: {
        textTransform: 'capitalize',
        color: '#8A8984',
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 14,
        letterSpacing: 1.5
    },
    separator: {
        color: '#8A8984',
        fontSize: 12,
    },
    link: {

    },
    '@media (max-width: 600px)': {
        linkBlock: {
            height: 100
        },
        linkInform: {
            justifyContent: 'center'
        },
        link: {
            display: 'flex',
            justifyContent: 'center'
        }
    },
    '@media (max-width: 400px)': {
        li: {

            lineHeight: 2,

        },
    }
})

const HeaderBottom: React.FC<RouteComponentProps<PathProps>> = (props) => {
    const classes = useStyles()
    const { location: { pathname } } = props
    const pathnames = pathname.split('/').filter(x => x)


    return (

        <Box className={classes.linkBlock}>
            <Container>
                <Grid container className={classes.link}>
                    <Breadcrumbs maxItems={4} aria-label="breadcrumb" classes={{ ol: classes.linkInform, li: classes.li, separator: classes.separator }}>
                        <Link color="inherit" to="/" component={RouterLink}>Home</Link>
                        {pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
                            const isLast = index === pathnames.length - 1
                            return isLast ? <Link key={index} color="primary" to="#" component={RouterLink}>{name}</Link> : <Link key={index} color="inherit" to={routeTo} component={RouterLink}>{name}</Link>
                        })}
                    </Breadcrumbs>
                </Grid>
            </Container>
        </Box>

    )
}

interface PathProps {
    // ...
}

export default withRouter(HeaderBottom)
