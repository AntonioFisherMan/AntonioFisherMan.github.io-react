import React, { useState } from 'react'

const ModalContext = React.createContext()

const ModalProvider = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState(null)
    const [size, setSize] = useState(null)

    const openModal = (product, size) => {
        setModalProduct(product)
        setSize(size)
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setModalProduct(null)
        setIsModalOpen(false)
    }
    return (
        <ModalContext.Provider
            value={{ modalProduct: modalProduct, isModalOpen: isModalOpen, size: size, openModal: openModal, closeModal: closeModal }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

const ModalConsumer = ModalContext.Consumer

export { ModalProvider, ModalConsumer }
