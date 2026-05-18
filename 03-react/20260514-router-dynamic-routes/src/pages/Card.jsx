import { useParams } from "react-router-dom"

import heroes from '../data/heroes'

function Card({heroName}) {
    const bartImgSrc = '/bart.jpg'
    const { slug } = useParams()
    console.log('slug: ', slug)
    
    // Busca dentro del array 'heroes' el primer elemento cuyo 'id' coincida con 'heroId'.
    // La función find recorre el array y devuelve ese elemento; si no existe, devuelve undefined.
    // Recibe un callback que se ejecuta para cada elemento del array, y devuelve true para el elemento que queremos encontrar.
    const currentHero = heroes.find((element) => { return element.slug == slug } )
    if (!currentHero) {
        return (
            <>
            404 - Página no existe
            </>
        )
    }

    return (
        <>
        <div className="hero-card">
            <img src={currentHero.image} alt={currentHero.title} />

            <div className="hero-content">
                <h1>{currentHero.title}</h1>
                <p>{currentHero.info}</p>
            </div>
        </div>
        </>
    )
}

export default Card