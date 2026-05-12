import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import About from './pages/About.jsx'
import TeamMember from './pages/TeamMember.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
            path: 'about',
            element: <About />,
            children: [
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