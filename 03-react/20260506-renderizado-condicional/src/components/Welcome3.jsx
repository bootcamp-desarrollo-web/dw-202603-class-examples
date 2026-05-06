function Welcome3({user}) {
    // Esta función devuelve bienvenido/bienvenida/??? (string) según el género
    function welcomeMsg(gender) {
        if (user.gender == "M") {
            return "Bienvenido"

        } else if (user.gender == "F") {
            return "Bienvenida"

        } else {
            return "???"
        }
    }

    return (
        <h1>
            { welcomeMsg(user.gender) } {user.name}
        </h1>
    )
}

export default Welcome3