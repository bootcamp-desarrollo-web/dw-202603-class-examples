function Welcome2({user}) {
    return (
        <h1>
            {user.gender == "M" ? "Bienvenido" : "Bienvenida" } {user.name}
        </h1>
    )

}

export default Welcome2