import React from 'react'
import { Button, Modal } from "react-bootstrap";

function AddNoteModal({ title, show, handleClose, addNote, children }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addNote}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddNoteModal;