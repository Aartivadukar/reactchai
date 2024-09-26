import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layuot from './Layuot.jsx'
import Home from './components/Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layuot/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"Contact us",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

//second way to create path rounting

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layuot/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact us' element={<Contact/>}/>
      <Route path='/user/:id' element={<User/>}/>
      <Route
      loader={githubInfoLoader}
       path='/github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
