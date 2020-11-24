import { Box, Container, Grid, Breadcrumbs, Typography, makeStyles, Link } from '@material-ui/core'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface PathProps {
    // ...
}

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
        textTransform: 'capitalize'
    },
    '@media (max-width: 575.98px)': {
        linkBlock: {
            height: 100
        },
        linkInform: {
            justifyContent: 'center'
        }
    }
})

const HeaderBottom: React.FC<RouteComponentProps<PathProps>> = (props) => {
    const classes = useStyles()
    const { location: { pathname } } = props
    const pathnames = pathname.split('/').filter(x => x)

    return (

        <Box className={classes.linkBlock}>
            <Container>
                <Grid container>
                    <Breadcrumbs maxItems={4} aria-label="breadcrumb" classes={{ ol: classes.linkInform, li: classes.li }}>
                        <Link color="inherit" href="/" >Home</Link>
                        {pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
                            const isLast = index === pathnames.length - 1
                            return isLast ? <Link color="primary" href="">{name}</Link> : <Link color="inherit" href={routeTo}>{name}</Link>
                        })}
                    </Breadcrumbs>
                </Grid>
            </Container>
        </Box>

    )
}


export default withRouter(HeaderBottom)
