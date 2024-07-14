import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({username:"",password:""})
    const navigate = useNavigate()
    const handleRedirect = (e) => {
        console.log(e);
        navigate(`/${e}`) 
    }

    const handleLogin = async () => {
        const res = await fetch('http://localhost:3000/signup')
        const users = await res.json()

        let uFound = 0
        let pFound = 0

        for(let user of users){
            if(user.username === username)
            {
                uFound = 1
                if(user.password === password){
                    pFound = 1
                    break
                }
            }
        }
        if(uFound == 0){
            setError({username:"Username not found",password:""})
            return
        }
        if(pFound == 0){
            setError({username:'',password:'Incorrect Password'})
            return
        }

        setError({username:'',password:''})

        navigate('/')
    }


  return (
    <div action="#" id="login">
        <div id="cross-login" onClick={() => handleRedirect("")}>X</div>
        <div className="login-header">Log In</div>
        <div className="login-input">
            <div className="input">
                <label >Username</label><br />
                    <input id="username" type="text" placeholder="UserName" required value={username} onChange={(e) => setUsername(e.target.value)} />
                {error.username && <div id="span">{error.username}</div>}
            </div>
            <div className="input">
                <label >Password</label><br />
                    <input id="password" type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                 {error.password &&  <div id="span2">{error.password}</div>}
            </div>
            <div className="input">
                <button onClick={handleLogin} id="btn" type="button">Log In</button>
            </div>
            <div id="i-input" onClick={() => handleRedirect('signup')}>
                Don't Have a Account?<u>Create One</u>

            </div>
        </div>
    </div>
  )
}

export default Login