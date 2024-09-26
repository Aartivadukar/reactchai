
import './App.css'
import Login from './Login'
import Profile from './Profile'
import UesrContextProvider from './context/UesrContextProvider'

function App() {
  
  return (
    
      <UesrContextProvider>
      <h1>react with aarti</h1>
      <Login/>
      <Profile/>
      </UesrContextProvider>
  )
}

export default App
