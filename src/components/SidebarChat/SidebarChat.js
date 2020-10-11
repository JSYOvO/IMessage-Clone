import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

const tag = "[SidebarChat]";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>Channel Anme</h3>
                <p>Last Message Sent..</p>
                <small>timestamp</small>
            </div>
        </div>
    )
};

export default SidebarChat;
