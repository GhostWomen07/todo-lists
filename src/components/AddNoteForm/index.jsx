import React from 'react';
import Form from 'react-bootstrap/Form';


function AddNoteForm({title,setTitle,detail,setDetail}) {
    return (
        <>
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
                type="text"
                id="title"
                placeholder='Task title'
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}

            />
            <Form.Label htmlFor="detail">Detail</Form.Label>
            <Form.Control
                as="textarea"

                id="detail"
                placeholder='Task Detail'
                name="detail" value={detail}
                onChange={(e) => setDetail(e.target.value)}
            />

        </>
    )
}

export default AddNoteForm;