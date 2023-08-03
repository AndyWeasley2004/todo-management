import React, {useState} from "react";
import {loginAPICall, saveLoggedInUser, storeToken} from "../services/AuthService.js";
import {useNavigate} from "react-router-dom";

function LoginComponent() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleLoginForm(e) {
        e.preventDefault();

        console.log(username);
        console.log(password);

        loginAPICall(username, password).then((response) => {
            console.log(response.data);

            // const token = 'Basic ' + window.btoa(username + ":" + password);
            const token = 'Bearer ' + response.data.accessToken;
            storeToken(token);

            saveLoggedInUser(username);
            navigate("/todos")

            window.location.reload(false);
        }).catch(error => {
            console.error(error);
        })
    }


    return (
        <div className='container'>
            <br/><br/>
            <div className="row">
                <div className="col-md-6 offset-md-3 offset-md-3">
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'>Login Form</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className='row mb-3'>
                                    <label className='form-label col-md-3 '>Username Or Email:</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            placeholder="Enter Username"
                                            className='form-control'
                                            name='username'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className='row mb-3'>
                                    <label className='form-label col-md-3'>Password:</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            placeholder="Enter Password"
                                            className='form-control'
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className='form-group mb-3'>
                                    <button className='btn btn-primary'
                                            onClick={(e) =>
                                                handleLoginForm(e)}>Submit
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginComponent;
