import React from 'react';
import { Button, Modal } from "react-bootstrap";

function DeleteNoteModal({ title, show, handleClose, info, deleteNote }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {info}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={deleteNote}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteNoteModal;