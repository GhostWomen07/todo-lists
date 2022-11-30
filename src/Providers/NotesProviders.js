import React, { useState } from "react";
import uuid from 'uuid';

export const Context = React.createContext();

const Provider = props => {
    const [data, setData] = useState([{
        id: "1",
        title: "first note here 1",
        detail: "complete first task"
    },
    {
        id: "2",
        title: "first note here 2",
        detail: "complete first task"
    },
    {
        id: "3",
        title: "first note here 3",
        detail: "complete first task"
    },
    {
        id: "4",
        title: "first note here 4",
        detail: "complete first task"
    }])

    const deleteNote = (e, id) => {
        const newNotes = data.filter((note) => note.id !== id)
        setData(newNotes)
    }

    const addNote = (e,title,detail) => {
        setData((prev) => [
            ...prev,{
                id:uuid(),
                title:title,
                detail:detail
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
