import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import  Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const Login = () => {

    const {
             setUsername,
             setPassword
          } = useContext(AuthContext);

     const navigate = useNavigate();

    const ProceedLogin = (e) => {
        e.preventDefault();
       // console.log(username);

        navigate('/home');
      } 

  return ( 
    <div>
        
            <h2>Login</h2>
            <FormControl action="" >
                <label htmlFor="username">Username</label>
                <TextField required type="text" variant="outlined" placeholder="Enter Username" name="username" id="username" 
                onChange={e => setUsername(e.target.value)} />
                <br/>
                <lable htmlFor="password">Password</lable>
                <TextField type="password"  variant="outlined" placeholder="Enter Password" name="password" id="password"
                onChange={e => setPassword(e.target.value)} required />
                <br/>
                <Button type="submit" variant="contained" onClick={ProceedLogin}>Login</Button>   
            </FormControl>
       
    </div>
  )
}

export default Login
