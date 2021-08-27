import React from 'react'
import './styles/App.css'
import {AsideMenu} from './components/AsideMenu'
import {Messenger} from './components/Messenger'

export const App: React.FC = () => {
    return (
        <main className="app_wrapper">
            <AsideMenu/>
            <Messenger/>
        </main>
    )
}
