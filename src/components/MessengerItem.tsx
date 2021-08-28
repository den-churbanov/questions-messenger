import React from 'react'
import {Icon} from './svg-icons/Icon'
import SVGfile from './svg-icons/icons-sprite.svg'
import {IMessage} from '../services/app.service'
import {toDate} from '../services/utils'

interface IMessengerItemProps {
    item: IMessage,
    changeClosed: (id: string) => void
}

export const MessengerItem: React.FC<IMessengerItemProps> = ({item, changeClosed}) => {

    const changeClosedHandler = (e:React.MouseEvent) => {
        e.preventDefault()
        changeClosed(item.id)
    }

    return (
        <div className="message_card">
            <div className={`message_card__condition${item.closed ? ' message_card__condition_closed' : ''}`}
                 onClick={changeClosedHandler}>
                <div className="message_card__question">
                    <p>Q{item.id}</p>
                </div>
                <Icon name="checkmark" file={SVGfile}/>
                <div className="message_card__status">
                    <p>{toDate(Date.now() - item.date, false, false, true)}</p>
                </div>
            </div>
            <div className="message_card__content">
                <p className="message">
                    {item.message}
                </p>
                <div className="message_card__management">
                    <p className="time">{toDate(item.date, true, true)}</p>
                    <button className="plus_button button_primary">
                        <Icon name="plus" file={SVGfile}/>
                    </button>
                </div>
            </div>
        </div>
    )
}