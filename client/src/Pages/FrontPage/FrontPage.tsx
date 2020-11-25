import React from "react"
import { Typography, Grid, Box, withStyles, WithStyles, Container, Hidden } from "@material-ui/core"

import { styles } from './styles'

import MyButton from "../../components/SiteButton/MyButton/MyButton"
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import Item from "./Item/Item"
import Slider from "../../components/Slider/Slider"
import Slider2 from "../../components/Slider/Slider2"
import { H5 } from "../../common/Typography/H5"
import { H4 } from "../../common/Typography/H4"
import { Subtitle1 } from "../../common/Typography/Subtitle1"
import { items } from "./data"
import { items2 } from "./data"
import { IconOr } from "../../common/elements/IconOr"


const FrontPage: React.FC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <>
      <Box className={classes.introBlock}>
        <Grid container >
          <Hidden smDown>
            <Grid item xs={12} md={7}></Grid>
          </Hidden>

          <Grid item xs={12} md={5} >
            <Box className={classes.introText}>
              <Typography variant="h1">One Box<br /></Typography>
              <Typography variant="h2">Unlimited Choice</Typography>
              <H5 text="decided to rent dress?" propsClasses={classes.text} />
              <MyButton href="/" text="RENT NOW" color="default" variant="contained" propsClasses={classes.btnWhite} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Container>
        <Grid container>
          <Grid container>
            <Grid item className={classes.headline}>
              <SiteHeadline text="How it works" />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" className={classes.worksItems} spacing={4}>
            {items.map(item => {
              return (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                  <Item img={item.img} text={item.text} headline={item.headline} />
                  {item.icon ?
                    <Hidden only={['xs']}>
                      <Box className={classes.icon}>
                        <IconOr />
                      </Box>

                    </Hidden> : null}
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center">
          <MyButton href="/" text="rent now" />
        </Grid>
      </Container>

      <Container>
        <Grid container direction="row" justify="space-between" alignItems="center" >
          <Grid item >
            <SiteHeadline text="Few of our styles" />
          </Grid>
          <Hidden only={['sm', 'xs']}>
            <Grid item >
              <MyButton href="/follow" text="All catalog" variant="outlined" color="default" />
            </Grid>
          </Hidden>

        </Grid>

        <Grid container direction="row" justify="center" className={classes.sliderBlock}>
          <Slider id="multiCarousel" a="#multiCarousel" />
        </Grid>

        <Grid container >
          <Grid item xs={12}>
            <MyButton href="/catalog" text="All CATALOG" variant="outlined" color="default" fullWidth />
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container>
          <Grid item className={classes.headline}>
            <SiteHeadline text="Benefits" />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" >
          <H4 text="Decided to rent the dress? You’ve just" propsClasses={classes.benefitsText} />
        </Grid>
        <Grid container>
          {items2.map(item => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Item img={item.img} headline={item.headline} />
              </Grid>
            )
          })}
        </Grid>
        <Grid container direction="row" justify="center" className={classes.benefitsBtn}>
          <MyButton href="/" text="rent now" />
        </Grid>
      </Container>

      <Container>
        <Grid container justify="space-between" alignItems="center" className={classes.headline}>
          <Grid item >
            <SiteHeadline text="Follow Us on Instagram" />
          </Grid>
          <Hidden only={['sm', 'xs']}>
            <Grid item >
              <MyButton href="/follow" text="follow us" variant="outlined" color="default" />
            </Grid>
          </Hidden>

        </Grid>
        <Grid container className={classes.sliderBlock2}>
          <Slider2 id="multiCarousel2" a="#multiCarousel2" />
        </Grid>
        <Grid container direction="row" justify="center">
          <H4 text="Follow us on Instagram @dressitbox" propsClasses={classes.followText} />
        </Grid>
      </Container>

    </>
  )
}


export default withStyles(styles)(FrontPage)



