import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Cursos from "./components/Cursos"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>,
      errorElement: <h1>404 not found</h1>
    },
    {
      path:'/cursos',
      element:<Cursos/>,
      errorElement: <h1>404 not found</h1>
    }
  ]
)
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
