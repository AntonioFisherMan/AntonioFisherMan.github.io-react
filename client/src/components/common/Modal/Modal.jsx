import React, { Component } from "react";
import { ModalConsumer } from "../../../context/modalContext";
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide, } from "@material-ui/core";
import MyButton from "../../SiteButton/MyButton/MyButton";
import { H5 } from "../../Typography/H5";
import { Subtitle1 } from '../../Typography/Subtitle1'

const MyTransition = props => <Slide direction="down" {...props} />

const DialogWindow = () => {
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
              <DialogTitle>New User</DialogTitle>
              <DialogContent>
                <H5 text="Your good added to cart" />
                <img src={value.modalProduct.photos.middle} className="img-fluid" alt="" />
                <H5 text={value.modalProduct.text} />
                <Subtitle1 text={value.modalProduct.price} />
                <Subtitle1 text={value.size} />
                <Subtitle1 text={value.modalProduct.color} />
              </DialogContent>
              <DialogActions>
                <button onClick={() => closeModal()}> <MyButton text="Continue Shopping" href="/catalog" /></button>
                <button onClick={() => closeModal()}><MyButton text="To Card" href="/card" /></button>
              </DialogActions>
            </Dialog>
          );
        }
      }}
    </ModalConsumer>
  )
}

export default DialogWindow




