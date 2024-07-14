import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

const SignUp = () => {
    const [error,setError] = useState("")
    const [user, setUser] = useState({
        username:'',
        email: '',
        password: ''
      })
    
      const handleChange = (e) => {
          setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
        

      async function postData() {
        let uFound = 0
        const res = await fetch("http://localhost:3000/signup")
        const users = await res.json()
        for(let existingUser of users){
            if(existingUser.username === user.username){
                uFound = 1
                break
            }
        }
        if(uFound == 1){
            setError("Username already exist")
            return
        }

        let postRes = await fetch("http://localhost:3000/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        let data = await postRes.json()
        console.log(data);
        setError('')
        navigate('/')
    }
    const navigate = useNavigate()

    const handleRedirect = (e) => {
        navigate(`/${e}`)
    }




  return (
    <div action="#" id="signin">
    <div id="cross-signin" onClick={() => handleRedirect("")}>X</div>
    <div className="signin-header">Sign In</div>
    <div className="signin-input">
        <div className="s-input">
            <label >Username</label><br />
            <input id="name" name="username" type="text" placeholder="UserName" required value={user.username} onChange={handleChange} />
            {error && <div id="span1">{error}</div>}
        </div>
        <div className="s-input">
            <label >Email</label><br />
            <input id="email" name='email' type="email" placeholder="Email" required value={user.email} onChange={handleChange} />
        </div>
        <div className="s-input">
            <label >Password</label><br />
            <input id="pass" name='password' type="password" placeholder="Password" required value={user.password} onChange={handleChange} />
        </div>
        <div className="s-input">
            <button onClick={postData} id="button" type="button">Sign In</button>
        </div>
        <div id="i-input" onClick={() => handleRedirect('login')}>
            Already Have a Account?<u>Log In</u>

        </div>
    </div>
</div>
  )
}

export default SignUp