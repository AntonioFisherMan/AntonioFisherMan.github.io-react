import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { H4 } from '../../common/Typography/H4'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import { useStyles } from './styles'
import { Children } from './Children'


const NotFound = () => {
	const classes = useStyles()
	return (
		<>
			<Children>
				<img src="lgoog.pmg" />
				<H4 text="asdas" />
			</Children>

			<Box className={classes.notfound}>
				<Box className={classes.text}>
					<Subtitle1 text="404" propsClasses={classes.headline} />
				</Box>
				<H4 text="Oops,The Page you are looking for can't be found!" propsClasses={classes.h4} />
				<Link to="/" className={classes.link}><span className={classes.arrow}></span>Return To Homepage</Link>
			</Box>
		</>


	)
}


export default NotFound

