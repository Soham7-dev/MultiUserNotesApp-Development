import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({note}) => {

    const getTitle = (note) => {

        let title = note.body.split('\n')[0];
        
        if(title.length > 45){
            title = title.slice(0, 45);
        }

        return title;
    }

    const getContent = (note) => {

        const content_Array = note.body.split('\n');
        
        const content = content_Array.slice(1, content_Array.length);

        let content_String = content.join(' ');

        if(content_String.length > 45){
           content_String = content_String.slice(0,45) + '...';
        }

        return content_String;
    }

    const getTime = (note) => {
        return new Date(note.updated).toLocaleDateString();
    }
    
    return(
        <Link to={`/notes/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span>{getContent(note)}</p>
            </div>
        </Link>
    )
}

export default ListItem;