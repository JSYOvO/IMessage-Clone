import React from 'react';
import Sidebar from '../Sidebar/Sidebar.js';
import Chat from '../Chat/Chat.js';
import './Imessage.css';

const tag = "[Imessage]"

function Imessage() {
    return (
        <div className="imessage">
            <Sidebar/>
            <Chat/>
        </div>
    )
}

export default Imessage;
