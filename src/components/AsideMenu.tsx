import React from 'react'
import avatar from './images/avatar.jpg'
import {Icon} from './svg-icons/Icon'
import SVGfile from './svg-icons/icons-sprite.svg'

export const AsideMenu: React.FC = () => {
    return (
        <aside className="aside_menu">
            <div className="aside_menu__header">
                <div className="profile_card">
                    <div className="profile_card__image">
                        <img src={avatar}/>
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
                    <button className="plus_button" onClick={() => console.log('plus')}>
                        <Icon name="plus" file={SVGfile}/>
                    </button>
                </div>
                <ul className="menu_list">
                    <li className="menu_list__item">
                        <Icon name="menu-item" file={SVGfile}/>
                        <p>Пункт </p>
                    </li>
                    <li className="menu_list__item menu_list__item_active">
                        <Icon name="menu-item" file={SVGfile}/>
                        <p>Пункт </p>
                    </li>
                    <li className="menu_list__item">
                        <Icon name="menu-item" file={SVGfile}/>
                        <input type="text" className="menu_list__input"/>
                        <button className="mark_button" onClick={() => console.log('plus')}>
                            <Icon name="checkmark" file={SVGfile}/>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}