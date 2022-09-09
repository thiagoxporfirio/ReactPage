import Feed from "../components/Feed"

export default function MostViewed(){
    const posts = [
        {
            id: Math.random(),
            content: 'Ola meu nome e thiago e esse trabalho foi feito com React',
            userName: 'Thiago',
            publishedAt: new Date(),
        },
    ]

    return (
        <main className="most-viewed">
            <Feed  posts={posts}
            title='Mais vistos'
            subtitle='Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade' />
        </main>
    )
    
}