import React from 'react'
import avatar from './images/avatar.jpg'
import {Icon} from './svg-icons/Icon'
import SVGfile from './svg-icons/icons-sprite.svg'
import {MenuItem} from "./MenuItem";
import {IMessageGroup} from '../services/app.service'

interface IAsideMenuProps {
    items: Array<IMessageGroup>,
    addItem: () => void,
    selected: string,
    setItemName: (name: string, idx: string) => void,
    changeSelected: (id: string) => void
}

export const AsideMenu: React.FC<IAsideMenuProps> = ({items, addItem, selected, setItemName, changeSelected}) => {

    return (
        <aside className="aside_menu">
            <div className="aside_menu__header">
                <div className="profile_card">
                    <div className="profile_card__image">
                        <img src={avatar} alt="avatar"/>
                    </div>
                    <div className="profile_card__info card_info">
                        <p className="name">Denis Churbanov</p>
                        <p className="online">online</p>
                    </div>
                </div>
            </div>
            <div className="aside_menu__content">
                <div className="aside_menu__title">
                    <div className="title_info">
                        <span>messages</span>
                        <a href="#">history</a>
                    </div>
                    <button className="plus_button" onClick={addItem}>
                        <Icon name="plus" file={SVGfile}/>
                    </button>
                </div>
                <ul className="menu_list">
                    {items.map(item => <MenuItem key = {item.id+item.name}
                                                 item={item}
                                                 selected={selected === item.id}
                                                 setItemName = {setItemName}
                                                 changeSelected={changeSelected}/>)}
                </ul>
            </div>
        </aside>
    )
}