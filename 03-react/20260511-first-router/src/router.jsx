import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import TeamMember from './pages/TeamMember.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
            // Indicar que este hijo tiene que aparecer dentro del outlet con
            // la misma url del padre
            // (Es igual como poner: path: '')
            index: true,  
            element: <Home />,
        },
        {
            path: 'about',
            element: <About />,
            children: [
                {
                    path: '',
                    element: <Team />
                },
                {
                    path: 'alonso',
                    element: <TeamMember memberName={'Alonso'} />
                },
                {
                    path: 'beatriz',
                    element: <TeamMember memberName={'Beatriz'} />
                },
                {
                    path: 'carlos',
                    element: <TeamMember memberName={'Carlos'} />
                },
            ]
        }
    ],
  },
])

export default router