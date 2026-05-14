import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Exposiciones from './pages/Exposiciones.jsx'
import ExposicionesDefault from './pages/ExposicionesDefault.jsx'
import ExposicionDetalle from './pages/ExposicionDetalle.jsx'
import Artistas from './pages/Artistas.jsx'
import ArtistasDefault from './pages/ArtistasDefault.jsx'
import ArtistaDetalle from './pages/ArtistaDetalle.jsx'
import Contacto from './pages/Contacto.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
            path: '',  
            element: <Home />,
        },
        {
            path: 'exposiciones',  
            element: <Exposiciones />,
            children: [
                {
                    path: '',  
                    element: <ExposicionesDefault />
                },
                {
                    path: 'permanentes',  
                    element: <ExposicionDetalle exposicion={'permanentes'} />
                },
                {
                    path: 'temporales',  
                    element: <ExposicionDetalle exposicion={'temporales'} />
                },
                {
                    path: 'infantiles',  
                    element: <ExposicionDetalle exposicion={'infantiles'} />
                },

            ]
        },
        {
            path: 'artistas',  
            element: <Artistas />,
            children: [
                {
                    path: '',  
                    element: <ArtistasDefault />
                },
                {
                    path: 'van-gogh',  
                    element: <ArtistaDetalle artista={'van-gogh'} />
                },
                {
                    path: 'frida-kahlo',  
                    element: <ArtistaDetalle artista={'frida-kahlo'} />
                },
                {
                    path: 'picasso',  
                    element: <ArtistaDetalle artista={'picasso'} />
                },

            ]
        },
        {
            path: 'contacto',
            element: <Contacto />
        }
    ],
  },
])

export default router
