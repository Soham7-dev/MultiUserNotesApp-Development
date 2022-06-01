import './Notes.css';
import React, {useState, useEffect} from "react";
import ListItem from "./listItems";
import {ReactComponent as NotesIcon} from '../assets/copy.svg';
import AddButton from "./AddButton";
import Header from "./Header";
import { useCookies } from 'react-cookie';

const NotesList = () => {

    const [notes, setNotes] = useState([]);
    const [token] = useCookies(['token']);

    useEffect(() => {
        getNotes();
    }, []);

    useEffect(() => {
        if(!token['token']){
            window.location.href = '/'
        }
    })

    const getNotes = async () => {
        const response = await fetch('http://localhost:8000/api/notes',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`
            }
        });
        const data = await response.json();
        console.log(data);
        setNotes(data);
    }

    return(
        <div className="container">
            <div className="app">
                <div className="notes">
                    <Header/>
                    <div className="notes-header">
                        <h2 className="notes-title"><NotesIcon/> Notes</h2>
                        <p className="notes-count">{notes.length}</p> 
                    </div>
                    <div className="notes-list">
                        {notes.map((note,index) => {
                            return <ListItem key={index} note={note}/>
                        })}
                    </div>
                <div>
                    <AddButton/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default NotesList;