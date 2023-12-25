import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import  Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const Login = () => {

    const {formData, setFormData}= useContext(AuthContext);
     const [errors, setErrors] = useState({});
  

     const navigate = useNavigate();

      const handleChange = (e) => {
         const { name, value } = e.target;
          setFormData({ ...formData, [name] : value  });
      };

      const ProceedLogin = (e) => {
        e.preventDefault();

        const validationErrors = {}

       if(!formData.username){
         validationErrors.username = "Username is required";
       }

       if(!formData.email){
        validationErrors.email = "Email is required";
      } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "Email is not valid"
      }

      if(!formData.password){
        validationErrors.password = "Password is required";
      } else if (formData.password.length < 6){
        validationErrors.password = "Password length should not be less than 6";
      }

        setErrors(validationErrors)
        if(Object.keys(validationErrors).length ===0) {
          //alert("Form Submited successfully");
          navigate('/home');
        }
      } 

  return ( 
    <div>
        
            <h2>Login</h2>
            <FormControl >
                <label htmlFor="username">Username</label>
                <TextField type="text" variant="outlined" placeholder="Enter Username" name="username" id="username" 
                 value={formData.username} onChange={handleChange} />
                 {errors.username && <span>{errors.username}</span>}
                  <br/>
                <label htmlFor="email">Email</label>
                <TextField type="text" variant="outlined" placeholder="Enter Email" name="email" id="email" 
                 value={formData.email} onChange={handleChange} />
                 {errors.email && <span>{errors.email}</span>}
                 <br/>
                <lable htmlFor="password">Password</lable>
                <TextField type="password"  variant="outlined" placeholder="Enter Password" name="password" id="password"
                value={formData.password} onChange={handleChange} />
                {errors.password && <span>{errors.password}</span>}
                <br/>
                <Button type="submit" variant="contained" onClick={ProceedLogin} >Login</Button>   
            </FormControl>
           
    </div>
  )
}

export default Login
