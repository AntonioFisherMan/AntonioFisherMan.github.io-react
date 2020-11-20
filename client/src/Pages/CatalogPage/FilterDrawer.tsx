import { Drawer, Box, Chip } from '@material-ui/core'
import React, { useState } from 'react'
import { MyCloseIcon } from '../../assets/icons/icons'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { H5 } from '../../components/Typography/H5'
import { ReduxFilterForm } from '../../redux/reduxForms/ReduxFilterForm'

type Props = {
        classes: any,
        removeFilter: (filter: string) => void,
        filter: Array<string>,
        onSubmit: () => void
}
export const FilterDrawer: React.FC<Props> = ({ classes, ...props }) => {
        const [isOpenFilter, setIsOpenFilter] = useState(false)
        const toggleFilter = (isOpen: boolean) => {
                setIsOpenFilter(isOpen)
        }
        return (
                <>
                        <Drawer anchor={"right"} open={isOpenFilter} onClose={() => toggleFilter(false)}>
                                <Box className={classes.productsFilter}>
                                        <H5 text="Filter" align="center" />
                                        {props.filter.map((filter: string) =>
                                                <Chip label={filter} color='primary' variant="outlined" onDelete={() => props.removeFilter(filter)} />
                                        )}
                                </Box>
                                <Box className={classes.filterIconClose}>
                                        <MyCloseIcon onClick={() => toggleFilter(false)} />
                                </Box>
                                <ReduxFilterForm onSubmit={props.onSubmit} />
                        </Drawer>
                        <button onClick={() => toggleFilter(true)}><MyButton text="FILTER" variant="outlined" href="" isIcon={false} /></button>
                </>
        )
}
