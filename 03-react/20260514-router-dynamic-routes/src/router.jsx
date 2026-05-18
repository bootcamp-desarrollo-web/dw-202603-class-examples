import { createBrowserRouter } from "react-router-dom"

import App from './App.jsx'
import Card from "./pages/Card.jsx"
import CardDefault from "./pages/CardDefault.jsx"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <CardDefault />
            },
            {
                path: ':slug',
                element: <Card />
            },
        ]
    }
])

export default router