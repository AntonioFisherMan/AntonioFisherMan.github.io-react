import React from "react";
import { ModalConsumer } from "../../context/modalContext";
import { Dialog, DialogActions, DialogContent, withStyles, DialogTitle, Slide, Box } from "@material-ui/core";
import MyButton from "../../components/SiteButton/MyButton/MyButton";
import { H5 } from "../Typography/H5";
import { Subtitle1 } from '../Typography/Subtitle1'
import { styles } from './styles'
import GreyText from "../Typography/GreyText";

const MyTransition = props => <Slide direction="down" {...props} />

const DialogWindow = ({ classes }) => {
  return (
    <ModalConsumer>
      {value => {
        const { isModalOpen, closeModal } = value;
        if (!isModalOpen) {
          return null
        } else {
          return (
            <Dialog open={isModalOpen} onClose={closeModal} disableBackdropClick
              disableEscapeKeyDown TransitionComponent={MyTransition} >
              <DialogTitle className={classes.title}>New Item</DialogTitle>
              <DialogContent className="d-flex flex-column">
                <H5 text="Your good added to cart" classes={classes.text} />
                <img src={value.modalProduct.photos.middle} className={classes.img} alt="" />
                <H5 text={value.modalProduct.text} />
                <Box className={classes.inform}>
                  <Box className="d-flex"><GreyText text="Price: " /><Subtitle1 text={value.modalProduct.price} /></Box>
                  <Box className="d-flex"><GreyText text="Size: " /><Subtitle1 text={value.size} /></Box>
                  <Box className="d-flex"><GreyText text="Color: " /><Subtitle1 text={value.modalProduct.color} /></Box>
                </Box>
              </DialogContent>
              <DialogActions>
                <button onClick={() => closeModal()}> <MyButton text="Continue Shopping" href="/catalog" variant="outlined" /></button>
                <button onClick={() => closeModal()}><MyButton text="To Card" href="/card" /></button>
              </DialogActions>
            </Dialog>
          );
        }
      }}
    </ModalConsumer>
  )
}

export default withStyles(styles)(DialogWindow)




