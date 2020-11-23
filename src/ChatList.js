import React from 'react'
import './ChatList.css'
import {Avatar} from "@material-ui/core"

function ChatList({name}) {
    return (
        <div className="chatList">
            <Avatar />
            <h4>{name}</h4>

        </div>
    )
}

export default ChatList
