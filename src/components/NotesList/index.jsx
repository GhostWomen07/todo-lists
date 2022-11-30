import React from 'react'
import {
    ListGroup,
    Button,
} from 'react-bootstrap';

function NotesList({ noteTitle, deleteModalHandle, setIdOfDeleteModal, noteId }) {
    return (
        <div>
            <ListGroup.Item key={noteId}>
                {noteTitle}
                <Button
                    className="remove-btn"
                    variant="danger"
                    size="sm"
                    onClick={(e) => {
                        deleteModalHandle();
                        setIdOfDeleteModal(noteId)
                    }}
                >
                    delete
                </Button>
            </ListGroup.Item>
        </div>
    )
}

export default NotesList;