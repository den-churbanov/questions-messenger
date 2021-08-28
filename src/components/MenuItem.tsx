import React, {useRef} from 'react'
import {Icon} from './svg-icons/Icon'
import SVGfile from './svg-icons/icons-sprite.svg'

interface IMenuItemProps {
    item: { id: string, name: string },
    selected: boolean,
    setItemName: (name: string, idx: string) => void,
    changeSelected: (id: string) => void
}

export const MenuItem: React.FC<IMenuItemProps> = ({item, setItemName, selected, changeSelected}) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const changeSelectedHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        changeSelected(item.id)
    }

    const setItemNameHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        if (inputRef.current && inputRef.current.value.trim().length)
            setItemName(inputRef.current.value.trim(), item.id)
    }

    if (!item.name)
        return (
            <li className="menu_list__item">
                <Icon name="menu-item" file={SVGfile}/>
                <input type="text"
                       className="menu_list__input"
                       placeholder="Enter group name..."
                       ref={inputRef}/>
                <button className="mark_button" onClick={setItemNameHandler}>
                    <Icon name="checkmark" file={SVGfile}/>
                </button>
            </li>
        )

    return (
        <li className={`menu_list__item${selected ? ' menu_list__item_active' : ''}`}
            onClick={changeSelectedHandler}>
            <Icon name="menu-item" file={SVGfile}/>
            <p>{item.name}</p>
        </li>
    )
}