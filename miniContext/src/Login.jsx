import React,{useState,useContext} from 'react'
import userContext from './context/userContext'

function Login() {
    const [username , setusername] = useState('')
    const [password , setpassword] = useState('')

    const {setuser} = useContext(userContext)
    const handleSubmit = (e) => {

        e.preventDefaulit()
        setuser({username,password})
    }
  return (
    <div>
        <h2>login</h2>
        <input type="text" value={username} 
        onChange={(e)=>setusername(e.target.value)}
        placeholder='username' />
        <input type="text"
        value={password} 
        onChange={(e)=>setpassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login