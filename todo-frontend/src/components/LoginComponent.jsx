import React, {useState} from "react";
import {loginAPICall, storeToken} from "../services/AuthService.js";
import {useNavigate} from "react-router-dom";

function LoginComponent() {

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const navigate = useNavigate();

    function handleLoginForm(e){
        e.preventDefault();

        loginAPICall(username, password).then((response) => {
            console.log(response.data);

            const token = 'Basic ' + window.btoa(username + ':' + password);
            storeToken(token);

            navigate('/todos');
        }).catch(error => {
            console.error(error);
        })
    }


    return (
        <div className='container'>
            <br/><br/>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className='card-header'>
                        <h2 className='text-center'>Log In</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className='row mb-3'>
                                <label className='control-lavel col-md-3'>Username Or Email:</label>
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
                                <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}>Submit</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;
