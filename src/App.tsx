import React, {useEffect, useMemo, useState} from 'react'
import './styles/App.css'
import {API, IMessage, IMessageGroup} from './services/app.service'
import shortid from 'shortid'
import {AsideMenu} from './components/AsideMenu'
import {Messenger} from './components/Messenger'

export const App: React.FC = () => {

    const [groups, setGroups] = useState<Array<IMessageGroup>>([])
    const [selected, setSelected] = useState<string>('')

    useEffect(() => {
        const data = API.getDataFromStorage()
        setGroups(data)
        if (data.length)
            setSelected(data[0].id)
        return () => {
            API.setDataToStorage(groups)
        }
    }, [])

    useEffect(() => {
        API.setDataToStorage(groups)
    }, [groups])

    const changeSelected = (id: string) => {
        setSelected(id)
    }

    const addGroup = () => {
        setGroups(prevState => ([...prevState, {
            id: shortid.generate(),
            name: '',
            messages: new Array<IMessage>()
        } as IMessageGroup]))
    }

    const setGroupName = (name: string, idx: string) => {
        setGroups(prevState => prevState.map(group => {
            if (group.id === idx) {
                return {
                    id: group.id,
                    name,
                    messages: group.messages
                } as IMessageGroup
            }
            return group
        }))
        setTimeout(() => setSelected(idx), 300)
    }

    const messages = useMemo(() => {
        const group = groups.filter(group => group.id === selected)[0]
        if (group) return group.messages
        return []
    }, [selected, groups])

    const changeClosed = (idx: string) => {
        setGroups(prevState => prevState.map(group => {
            if (group.id === selected) {
                return {
                    id: group.id,
                    name: group.name,
                    messages: group.messages.map(item => {
                        if (item.id === idx)
                            return {
                                id: item.id,
                                date: item.date,
                                closed: !item.closed,
                                message: item.message
                            } as IMessage
                        return item
                    })
                } as IMessageGroup
            }
            return group
        }))
    }

    const addMessage = (message: string) => {
        setGroups(prevState => prevState.map(group => {
            if (group.id === selected) {
                return {
                    id: group.id,
                    name: group.name,
                    messages: [...group.messages,
                        {
                            id: shortid.generate(),
                            date: Date.now(),
                            closed: false,
                            message
                        } as IMessage
                    ]
                } as IMessageGroup
            }
            return group
        }))
    }

    return (
        <main className="app_wrapper">
            <AsideMenu items={groups}
                       addItem={addGroup}
                       setItemName={setGroupName}
                       selected={selected}
                       changeSelected={changeSelected}/>
            <Messenger messages={messages}
                       addMessage={addMessage}
                       changeClosed={changeClosed}/>
        </main>
    )
}
