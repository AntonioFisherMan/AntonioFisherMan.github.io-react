import React from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { Box, makeStyles } from '@material-ui/core'
import { colors } from '../../constants/colors'

const useStyles = makeStyles({
    pagination: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 100,
    },
    text: {
        color: '#111111',
        width: 50,
        height: 50,
        borderRadius: '100px',
        border: '1px solid #111111 !important',

    },
    selected: {
        color: 'black !important',
        background: 'none !important',
        border: `1px solid ${colors.PINK} !important`,

    }
})

let Paginator: React.FC<PropsType> = ({ totalCount, pageSize, pageNumber, onPageChanged }) => {

    let count = totalCount / pageSize
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        onPageChanged(value);
    };
    const classes = useStyles()
    return (
        <Box className={classes.pagination}>
            <Pagination count={Math.ceil(count)} page={pageNumber} variant="outlined" size="large" color="primary" onChange={handleChange}
                renderItem={(item) => <PaginationItem {...item} classes={{
                    root: classes.text,
                    selected: classes.selected
                }} />}
            />
        </Box>
    )
}

type PropsType = {
    totalCount: number,
    pageSize: number,
    pageNumber: number,
    onPageChanged: (pageNumber: number) => void
}


export default Paginator
