import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AppLayout from './layout/AppLayout';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

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
      
    ]
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
