import { useState } from 'react'

import '../styles/PostForm.css'

import userIcon from '../images/user.svg'
import paperPlaneIcon from '../images/paper-plane.svg'


export default function PostForm(props){
    const [history, setHistory] = useState('')
    const [username, setUserName] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        props.onSubmit({history, username})

        setHistory('')
        setUserName('')

    }
    
    return(
        <form className='post-form' onSubmit={handleSubmit}>
            <input value={history} placeholder='Escreva uma nova historia...' onChange={(event) => setHistory(event.target.value)} />

            <div>
                <img src={userIcon} alt='User' />
                <input value={username} placeholder='Digite seu nome...' onChange={(event) => setUserName(event.target.value)} />
                <button type='submit'><img src={paperPlaneIcon} />Publicar</button>
            </div>
        </form>

    )

}