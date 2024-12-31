import React from 'react';
import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar.jsx';
import AppRouter from './components/AppRouter.jsx';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
