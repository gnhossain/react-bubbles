import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({username:'', password:''});

  const handleChange = e => {
    console.log(credentials);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    console.log(credentials);
  };
  const login = e =>{
    e.preventDefalt();
    console.log(credentials);

    axiosWithAuth()
    .post('/login',credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload);
      props.history.push('/protected');
    })
    .catch(err => console.log(err));
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form className= 'login-form' onSubmit={login}>
        <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
        />
        <input
        type="password"
        name="password"
        placeholder='Password'
        value={credentials.password}
        onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
