import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AppLayout from './layout/AppLayout';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Test from './pages/Test.jsx';
import Space from './components/space/Space.jsx';

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
