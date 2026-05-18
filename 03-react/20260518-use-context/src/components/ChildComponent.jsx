import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function ChildComponent() {
    const username = useContext(UserContext)
    
    return (
        <>
            <h3>Componente hijo</h3>
            <p>username: {username}</p>
        </>
    )
}

export default ChildComponent