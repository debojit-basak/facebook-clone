import React, {useState} from 'react'
import './MessageSender.css'
import {Avatar} from "@material-ui/core"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit= (e) =>{
       e.preventDefault();
       // some clever db stuff
       setInput("");
       setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form action="">
                <input value={input} onChange={(e)=>setInput(e.target.value)} className="messageSender__input" type="text" placeholder="What's on your mind?"/>
                <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="image url (optional)"/>
                <button type="submit" className="" onClick={handleSubmit}>Hidden Button</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messengerSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live video</h3>
                </div>
                <div className="messengerSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photos/Videos</h3>
                </div>
                <div className="messengerSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feelings/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;