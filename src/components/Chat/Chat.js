import React, {useState} from 'react';
import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import './Chat.css';

const tag = "[Chat]";

function Chat() {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        // with Firebase Magic

        setInput("");
    };

    return (
        <div className="chat">
            <div className="char__header">
                <h4>
                    To: 
                    <span className="chat__name">
                        Channel Name
                    </span>
                </h4>
                <strong>Details</strong>
            </div>
            <div className="chat__message">
                <h2>I am Message</h2>
            </div>
            <div className="chat__input">
                <form>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="iMessage" 
                        type="text"
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat 
