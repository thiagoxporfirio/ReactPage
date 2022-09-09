import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import AppRoutes from './Routes'

import './styles/App.css'
import './styles/PostForm.css'


export default function App() {



    return (
        <div className='wrapper'>
        
            <BrowserRouter>
                <nav>
                    <Link to='/'>Meu Feed</Link>
                    <Link to='/most-viewed'>Mais vistos</Link>
                </nav>

                <AppRoutes />
            </BrowserRouter>
        </div>
    )
    
}