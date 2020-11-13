import React from 'react'
import './CatalogPage.css'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import Paginator from '../../components/common/Paginator/Paginator'
import Preloader from '../../components/common/Preloader'
import { H5 } from '../../components/Typography/H5'
import { SiteMessage } from '../../components/common/ServerMessages/SiteMessage'
import { H6 } from '../../components/Typography/H6'
import { Chip, FormControl, MenuItem, Select } from '@material-ui/core'
import { Good } from '../../components/Good/Good'
import { ReduxFilterForm } from '../../redux/reduxForms/ReduxFilterForm'


const CatalogPage = (props: any) => {

    return (

        <>
            {!props.loading ? <>

                <section className="linkBlock">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center">
                                <div className="linkItem">
                                    <H6 text="SHOW" />
                                    <FormControl variant="filled">
                                        <Select
                                            defaultValue="3"
                                            onChange={e => props.changePageSize(e.target.value)}
                                        >
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={12}>12</MenuItem>
                                        </Select>
                                    </FormControl>

                                </div>
                            </div>
                            <div className="col-6 d-flex align-items ">
                                <div className="ml-auto" >
                                    <FormControl variant="filled">
                                        <Select
                                            defaultValue="SORT BY"
                                            onChange={e => props.changeSortBy(e.target.value)}
                                        >
                                            <MenuItem value={"От дешевых к дорогим"}>От дешевых к дорогим</MenuItem>
                                            <MenuItem value={"От дорогим к дешевым"}>От дорогим к дешевым</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ourProducts">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-2">
                                <div className="productsFilter">
                                    <H5 text="Filter" align="left" />
                                    {props.filter.map((filter: any) =>
                                        <Chip label={filter} color='primary' variant="outlined" onDelete={() => props.removeFilter(filter)} />
                                    )}
                                </div>
                            </div>
                            <div className="col-12 col-sm-10">
                                <SiteHeadline text="All our products" />
                            </div>
                        </div>

                        <div className="catalog">
                            <ReduxFilterForm onSubmit={props.onSubmit} />
                            <div className="catalogList">
                                {props.goods.length > 0 ? props.goods.map((item: any) => <Good good={item} />) : <SiteMessage text="К сожалению по выбранному запросу товаров нет в наличии" />}
                            </div>
                        </div>
                        <div className="row">
                            <Paginator pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                                totalCount={props.totalCount} pageNumber={props.pageNumber} portionSize={1} />
                        </div>
                    </div>
                </section>
            </> : <Preloader loading={props.loading} />}
        </>
    )
}



export default CatalogPage