import React, { useState } from 'react'
import { Box, Chip, Container, FormControl, Grid, Hidden, TextField, MenuItem, Select, withStyles, Input } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import Paginator from '../../components/Paginator/Paginator'
import Preloader from '../../common/Preloader'
import { H5 } from '../../common/Typography/H5'
import { SiteMessage } from '../../common/Messages/SiteMessage'
import { Good } from '../../components/Good/Good'
import { ReduxFilterForm } from '../../redux/reduxForms/ReduxFilterForm'
import { styles } from './styles'
import { FilterDrawer } from './FilterDrawer'
import { H6 } from '../../common/Typography/H6';

const CatalogPage = (props: any) => {
    const [pageSize, setPageSize] = useState(4)
    const [sort, setSort] = useState("SORT BY")
    const handleChange = (value: any) => {
        props.changePageSize(value)
        setPageSize(value)
    }
    const handleSort = (value: any) => {
        props.changeSortBy(value)
        setSort(value)
    }
    const { classes } = props
    return (
        <>
            {!props.loading ? <>
                <section className={classes.linkBlock}>
                    <Container>
                        <Grid container>
                            <Grid item xs={6} >
                                <Box className={classes.linkItem}>
                                    <H6 text="SHOW" propsClasses={classes.sortBtn} />
                                    <TextField select
                                        defaultValue={pageSize}
                                        onChange={e => handleChange(e.target.value)}

                                        SelectProps={{
                                            IconComponent: ExpandMoreIcon,
                                            classes: { root: classes.select, icon: classes.selectIcon }
                                        }}
                                    >
                                        <MenuItem value={"4"}>4</MenuItem>
                                        <MenuItem value={"8"}>8</MenuItem>
                                        <MenuItem value={"12"}>12</MenuItem>
                                    </TextField>


                                </Box>

                            </Grid>
                            <Grid item container xs={6} justify="flex-end">
                                <TextField select
                                    defaultValue={sort}
                                    onChange={e => handleSort(e.target.value)}
                                    SelectProps={{
                                        IconComponent: ExpandMoreIcon,
                                        classes: { root: classes.sortBtn, icon: classes.sortIcon }
                                    }}
                                >
                                    <MenuItem value={"SORT BY"}>SORT BY</MenuItem>
                                    <MenuItem value={"От дешевых к дорогим"}>От дешевых к дорогим</MenuItem>
                                    <MenuItem value={"От дорогим к дешевым"}>От дорогим к дешевым</MenuItem>

                                </TextField>

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
                                        <H5 text="Filter" align="left" propsClasses={classes.h5} />
                                        {props.filter.map((filter: any) =>
                                            <Chip label={filter} color='primary' variant="outlined" onDelete={() => props.removeFilter(filter)} />
                                        )}
                                    </Box>
                                    <ReduxFilterForm onSubmit={props.onSubmit} />
                                </Hidden>

                            </Grid>
                            <Grid item xs={12} sm={10} container>
                                <Box>
                                    <SiteHeadline text="All our products" propsClasses={classes.headline} />
                                    <Hidden smUp>
                                        <FilterDrawer classes={classes} {...props} />
                                    </Hidden>
                                    <Box className={classes.catalog}>
                                        <Box className={classes.catalogList}>
                                            {props.goods.length > 0 ? props.goods.map((item: any) => <Good good={item} />) : <SiteMessage text="К сожалению по выбранному запросу товаров нет в наличии" />}
                                        </Box>
                                    </Box>
                                </Box>


                                <Grid container>
                                    <Paginator pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                                        totalCount={props.totalCount} pageNumber={props.pageNumber} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </> : <Preloader loading={props.loading} />
            }
        </>
    )
}



export default withStyles(styles)(CatalogPage)








