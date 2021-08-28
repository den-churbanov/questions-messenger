import React, {useRef} from 'react'
import {Icon} from './svg-icons/Icon'
import SVGfile from './svg-icons/icons-sprite.svg'
import {IMessage} from "../services/app.service";
import {MessengerItem} from "./MessengerItem";

interface IMessengerProps {
    messages: Array<IMessage>,
    addMessage: (message: string) => void,
    changeClosed: (id: string) => void
}

export const Messenger: React.FC<IMessengerProps> = ({messages, addMessage, changeClosed}) => {

    const inputRef = useRef<HTMLTextAreaElement>(null)

    const addMessageHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        if (inputRef.current && inputRef.current.value.trim().length) {
            addMessage(inputRef.current.value.trim())
            inputRef.current.value = ''
        }
    }

    return (
        <div className="messenger">
            <div className="messenger__header">
                <p>Questions Messenger</p>
            </div>
            <div className="messenger__content">
                {
                    !messages ?
                        <p className="no_messages">No messages yet</p> :
                        messages.map(message => <MessengerItem key={message.id} item={message} changeClosed={changeClosed}/>)
                }
            </div>
            <form className="messenger__form">
                <textarea className="textarea_input"
                          placeholder="Enter new message..."
                          ref={inputRef}/>
                <button className="send_button button_primary" onClick={addMessageHandler}>
                    <Icon name="send" file={SVGfile}/>
                </button>
            </form>
        </div>
    )
}