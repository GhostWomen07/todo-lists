import React, { useState, useContext } from 'react';
import {
    Container,
    ListGroup,
    Button,
} from 'react-bootstrap';
import { Context } from '../Providers/NotesProviders';
import DeleteNoteModal from '../components/DeleteNote';
import NotesList from '../components/NotesList';
import AddNoteModal from '../components/AddNote';
import AddNoteForm from '../components/AddNoteForm';

function Notes() {
    const { data, addNote, deleteNote } = useContext(Context);
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [deleteModalshow, setDeleteModalShow] = useState(false);
    const [addModalshow, setaddModalShow] = useState(false);
    const [idOfDeleteModal, setIdOfDeleteModal] = useState(null)

    const deleteModalHandleClose = () => setDeleteModalShow(false);
    const deleteModalHandleShow = () => setDeleteModalShow(true);

    const addModalHandleClose = () => setaddModalShow(false);
    const addModalHandleShow = () => setaddModalShow(true);

    return (
        <Container style={{ marginTop: '2rem' }}>
            <ListGroup style={{ marginBottom: '1rem' }}>
                {data?.map((note) => (
                    <NotesList noteId={note.id}
                        noteTitle={note.title}
                        deleteModalHandle={deleteModalHandleShow}
                        setIdOfDeleteModal={setIdOfDeleteModal}
                    />
                ))}
            </ListGroup>
            <Button onClick={addModalHandleShow} >
                Add Item
            </Button>
            <DeleteNoteModal title="Delete Note" show={deleteModalshow} handleClose={deleteModalHandleClose} info="Are You Sure, you want to delete it" deleteNote={(e) => { deleteNote(e, idOfDeleteModal); deleteModalHandleClose() }} />
            <AddNoteModal title="Add Note" show={addModalshow} handleClose={addModalHandleClose} addNote={(e) => { addNote(e, title, detail); addModalHandleClose() }}  >
                <AddNoteForm detail={detail} setDetail={setDetail} title={title} setTitle={setTitle}/>
            </AddNoteModal> 
        </Container>
    )
}

export default Notes;