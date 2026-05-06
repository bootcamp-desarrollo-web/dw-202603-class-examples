function Welcome1({user}) {
    if (user.gender == "M") {
        return <h1>Bienvenido {user.name}</h1>

    } else if (user.gender == "F") {
        return <h1>Bienvenida {user.name}</h1>

    } else {
        return <h1>??? {user.name}</h1>
    }
    
}

export default Welcome1