import { useState } from 'react'

import Feed from '../components/Feed'
import PostForm from '../components/PostForm'


export default function Home(){
    
    const [posts, setPosts] = useState([])

    function handleSubmit({ history, username }){

        setPosts([
            ...posts,
            {
                id: Math.random(),
                content: history,
                userName: username,
                publishedAt: new Date(),
            }
        ])

    }

    return(
        <>
        <PostForm onSubmit={handleSubmit} />

            <main>
                <Feed posts={posts}
                title='Seu Feed'
                subtitle='Acompanhe o que seus amigos estao pensando em tempo real' />
            </main>
        </>
    )
}