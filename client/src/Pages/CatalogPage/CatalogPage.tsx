import React from 'react'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import Paginator from '../../components/common/Paginator/Paginator'
import Preloader from '../../components/common/Preloader'
import { H5 } from '../../components/Typography/H5'
import { SiteMessage } from '../../components/common/ServerMessages/SiteMessage'
import { H6 } from '../../components/Typography/H6'
import { Box, Button, Chip, Container, FormControl, Grid, Hidden, Menu, MenuItem, Select, withStyles } from '@material-ui/core'
import { Good } from '../../components/Good/Good'
import { ReduxFilterForm } from '../../redux/reduxForms/ReduxFilterForm'
import { styles } from './styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MyButton from '../../components/SiteButton/MyButton/MyButton'

const CatalogPage = (props: any) => {
    const { classes } = props
    return (
        <>
            {!props.loading ? <>

                <section className={classes.linkBlock}>
                    <Container>
                        <Grid container>
                            <Grid item xs={6}>
                                <Box className={classes.linkItem}>
                                    <FormControl variant="filled">
                                        <Select
                                            classes={{
                                                select: classes.select
                                            }}
                                            IconComponent={ExpandMoreIcon}
                                            defaultValue="3"
                                            onChange={e => props.changePageSize(e.target.value)}
                                        >
                                            <MenuItem value={"3"}>3</MenuItem>
                                            <MenuItem value={"6"}>6</MenuItem>
                                            <MenuItem value={"12"}>12</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="filled">
                                    <Select
                                        classes={{
                                            select: classes.sort
                                        }}
                                        defaultValue="SORT BY"
                                        onChange={e => props.changeSortBy(e.target.value)}
                                    >
                                        <MenuItem value={"От дешевых к дорогим"}>От дешевых к дорогим</MenuItem>
                                        <MenuItem value={"От дорогим к дешевым"}>От дорогим к дешевым</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Container>

                </section>

                <section className={classes.ourProducts}>
                    <Container>
                        <Grid container>
                            <Grid item xs={12} sm={2}>
                                <Hidden xsDown>
                                    <Box className={classes.productsFilter}>
                                        <H5 text="Filter" align="left" classes={classes.h5} />
                                        {props.filter.map((filter: any) =>
                                            <Chip label={filter} color='primary' variant="outlined" onDelete={() => props.removeFilter(filter)} />
                                        )}
                                    </Box>
                                    <ReduxFilterForm onSubmit={props.onSubmit} />
                                </Hidden>

                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <SiteHeadline text="All our products" classes={classes.headline} />
                                <Box className={classes.catalog}>
                                    <Box className={classes.catalogList}>
                                        {props.goods.length > 0 ? props.goods.map((item: any) => <Good good={item} />) : <SiteMessage text="К сожалению по выбранному запросу товаров нет в наличии" />}
                                    </Box>
                                </Box>

                                <Grid container>
                                    <Paginator pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                                        totalCount={props.totalCount} pageNumber={props.pageNumber} portionSize={1} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </> : <Preloader loading={props.loading} />}
        </>
    )
}



export default withStyles(styles)(CatalogPage)