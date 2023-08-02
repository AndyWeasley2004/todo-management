import React, { useState } from 'react'
import {registerAPICall} from "../services/AuthService.js";

function RegisterComponent() {

    const[name, setName] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function handleRegistrationForm(e){
        e.preventDefault();
        const register = { name, username, email, password };
        console.log(register);

        registerAPICall(register).then((response) => {
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        });
    }



  return (
    <div className='container'>
            <br/><br/>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className='card-header'>
                        <h2 className='text-center'>User Registration Form</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className='row mb-3'>
                                <label className='control-lavel col-md-3'>Name:</label>
                                <input
                                    type='text'
                                    placeholder="Enter Name"
                                    className='form-control'
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className='row mb-3'>
                                <label className='control-lavel col-md-3'>Username:</label>
                                <input
                                    type='text'
                                    placeholder="Enter Username"
                                    className='form-control'
                                    name='username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className='row mb-3'>
                                <label className='control-lavel col-md-3'>Email:</label>
                                <input
                                    type='text'
                                    placeholder="Enter Email"
                                    className='form-control'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='row mb-3'>
                                <label className='control-lavel col-md-3'>Password:</label>
                                <input
                                    type='text'
                                    placeholder="Enter Password"
                                    className='form-control'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-3'>
                                <button className='btn btn-primary' onClick={(e) => handleRegistrationForm(e)}>Submit</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RegisterComponent