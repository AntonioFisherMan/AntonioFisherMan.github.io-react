

import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import { InformItem } from '../../components/InformItem/InformItem'


export const MobileVersion: React.FC<MobileVersionProps> = ({ classes }) => {
        var today = new Date()
        return (
                <Grid container direction="row" className={classes.cardActiveItem} spacing={2}>
                        <Grid item className={classes.cardLinkActive} xs={3}>
                                <Subtitle1 text="Item" propsClasses={classes.p1} />
                                <Subtitle1 text="Order NO." propsClasses={classes.p2} />
                                <Subtitle1 text="Returns NO." propsClasses={classes.p3} />
                                <Subtitle1 text="Status" propsClasses={classes.p4} />
                        </Grid>
                        <Grid item className={classes.cardActive} xs={9}>
                                <Box className={classes.cardActiveInform}>
                                        <InformItem size="XS" startDate={today} endDate={today} fashion="maxi " text="A perfect flirty number for Balls and Black Tie." />
                                </Box>
                                <Subtitle1 propsClasses={classes.p2} text="4146567738" />
                                <Subtitle1 text="9tmlAIDfmx8B" propsClasses={classes.p3} />
                                <div className={classes.p4} >
                                        <img src="images/svg/Vector (24).svg" alt="" />
                                        <p>Return received on Mar 17, 2020</p>
                                </div>
                        </Grid>

                </Grid >

        )
}

type MobileVersionProps = {
        classes: any
}
