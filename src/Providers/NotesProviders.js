import React, { useState } from "react";
import uuid from 'uuid';
import axios from "axios";

export const Context = React.createContext();

const Provider = props => {
    const [data, setData] = useState()

    React.useEffect(() => {
        const loadNotes = async () => {
            try {
                const response = await axios.get("/notes");
                setData(response.data);
            } catch (e) {
                console.log("rejected", e);
            }
        };
        loadNotes();
    }, []);

    const deleteNote = (e, id) => {
        const newNotes = data.filter((note) => note.id !== id)
        setData(newNotes)
    }

    const addNote = (e, title, detail) => {
        setData((prev) => [
            ...prev, {
                id: uuid(),
                title: title,
                detail: detail
            }
        ])
    }

    return (
        <Context.Provider
            value={{
                data,
                setData,
                deleteNote,
                addNote
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default Provider;
