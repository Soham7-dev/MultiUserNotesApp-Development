import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { ReactComponent as ArrowLeft} from '../assets/chevron-left.svg';
import { useCookies } from 'react-cookie';
import Header from './Header';

const NotePage = () => {

    const {id} = useParams();

    const [note, setNote] = useState({});
    const [token] = useCookies(['token']);

    const history = useNavigate();

    useEffect(() => {
        getNote();
    }, [id]);

    useEffect(() => {
        if(!token['token']){
            window.location.href = '/';
        }
    })

    const getNote = async () => {

        if(id === 'create') return;

        const response = await fetch(`http://localhost:8000/api/notes/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`
            }
        });
        const data = await response.json();
        setNote(data);
    }

    console.log(note.body);

    const createNote = async () => {
        await fetch(`http://localhost:8000/api/notes/`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`
            },
            body: JSON.stringify(note)
        });
    }

    const updateNote = async () => {
        await fetch(`http://localhost:8000/api/notes/${id}/`,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`
            },
            body: JSON.stringify(note)
        });
    }

    const deleteNote = async () => {
        await fetch(`http://localhost:8000/api/notes/${id}/`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`
            },
        })

        history(-1);
    }

    const handleSubmit = () => {
        if(id !== 'create' && note['body'] === ''){
            deleteNote();
        }
        else if(id !== 'create'){
            updateNote();
        }
        else if(id === 'create' && note['body'] !== ''){
            createNote();
        }
        else if(id === 'create' && note['body'] === ''){
            window.alert('Plz Enter Some Text');
        }

        history(-1);
    } 

    return(
        <div className='container'>
            <div className='app'>
                <div className='note'>
                <Header/>
                    <div className='note-header'>
                        <h3>
                            <Link to = "/notes/">
                                <ArrowLeft/>
                            </Link> 
                        </h3>
                        {id === 'create'? <button className='save-btn' type='submit' onClick={handleSubmit}>save</button>
                        :
                        <span>
                            <button className='save-btn' type='submit' onClick={handleSubmit}>save</button>
                            <button className='delete-btn' type='submit' onClick={deleteNote}>delete</button>
                        </span>
                        }
                    </div>
                <textarea type='text' placeholder='Enter your Notes' autoFocus={true} onChange={(e) => {setNote({...note, ['body']:e.target.value});}} value={note?.body}></textarea>
                </div>
            </div>
        </div>
    )
}

export default NotePage;