import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core'

type PrealoaderType = {
    loading?: boolean,
    size?: number
}

const Preloader: React.FC<PrealoaderType> = ({ loading, size }) => {
    return (
        <Box display="flex" justifyContent="center" marginTop="10px" marginBottom="10px">
            {loading && <CircularProgress color="secondary" size={size ? size : "large"} />}
        </Box>
    )
}


export default Preloader