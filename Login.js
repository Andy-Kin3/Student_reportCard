import React, {useState} from 'react';
import Mail from '@material-ui/icons/Mail';
import Lock from '@material-ui/icons/Lock';
import './Login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const login = () => {
    const data = {email:email, password:password};
    axios.post("http://127.0.0.1:3001/auth/login", data).then((response) => {
      if(response.data.error){
        alert(response.data.error);
      } 
      else{
        sessionStorage.setItem("accessToken", response.data);
        console.log("YOU LOGGED IN");
      }
    });
  };
  return (
    <div className='login'>
      <h1 className='head'>School Report Card Management System</h1>
        <div className='login_form'>
          <h3>Sign into the report card management system</h3>
                  <div className='email'>
                  <Mail />
                    <input id='text' 
                    name='email' 
                    type='email' 
                    placeholder='Email' 
                    className="email" 
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                      required
                    />
                  </div>
                  <div className='pass'>
                  <Lock />
                    <input id='password' 
                    name='password' 
                    type='password'  
                    placeholder='Password' 
                    className="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    required
                    />
                  </div>
                  <div className='submit__button'>
                    <button type="submit" onClick={login}>Log In</button>
                  </div>
        </div>
    </div>
  )
}

export default Login;