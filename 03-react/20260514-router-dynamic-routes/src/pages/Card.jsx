import { useParams } from "react-router-dom"

import heroes from '../data/heroes'

function Card() {
    const bartImgSrc = '/bart.jpg'
    const { heroId } = useParams()

    const currentHero = heroes.find((element) => { return element.id == heroId } )
    if (!currentHero) {
        return (
            <>
            Personaje con id {heroId} no existe
            </>
        )
    }


    return (
        <>
        <div className="hero-card">
            <img src={currentHero.image} alt={currentHero.title} />

            <div class="hero-content">
                <h1>{currentHero.title}</h1>
                <p>{currentHero.info}</p>
            </div>
        </div>
        </>
    )
}

export default Card