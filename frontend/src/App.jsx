import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AppLayout from './layout/AppLayout';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Games from './pages/Games';
import Privacy from './pages/Privacy.jsx';
import Test from './pages/Test.jsx';
import Space from './components/space/Space.jsx';

// games
import TickTacToe from './games/tickTacToe/TickTacToe.jsx';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/projects',
        element: <Projects/>,
      },
      {
        path: '/games',
        element: <Games/>,
      },
      {
        path: '/privacy-policy',
        element: <Privacy/>,
      },
      
    ]
  },
  {
    path: '/games',
    element: <AppLayout/>,
    children: [
      {
        path: 'tick-tac-toe',
        element: <TickTacToe/>,
      },
    ]
  },
  {
    path: '/test',
    element: <><Space></Space><Test/></>,
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
