import React, { Component } from "react";
import styled from "styled-components";
import {ModalConsumer}  from "../../../redux/modalContext";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";


 class Modal extends Component {
  render() {
    debugger
    return (
      <ModalConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
         
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <h5>Your good added to cart</h5>
                      <img src={value.modalProduct.photos.middle} className="img-fluid" alt="" />
                      <h5>{value.modalProduct.text}</h5>
                      <h5 className="text-muted">price : ${value.modalProduct.price}</h5>
                      <h5 className="text-muted">size : {value.size}</h5>
                      <Link to="/catalog">
                        <ButtonContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                         Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/card">
                        <ButtonContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ModalConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white
  }
`;

export default Modal