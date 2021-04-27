import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector} from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './LoginForm.css';
import GlobalFooter from "../Footer";
import Navigation from "../Navigation";

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const toSignupPage = () => {
    history.push('/signup')
  }

  return (
    <div>
      <div>
      <Navigation />
      </div>
      <div className="formContainer">
        <img className="formImg" src="/imgs/300.jpeg"></img>
        <h1>Sign up or log in</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li className="errorList" key={idx}>{error}</li>)}
          </ul>

            <input
              placeholder="Username or Email"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />


            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          <button className="loginbtn" style={{cursor: 'pointer'}} type="submit">Get Started</button>
          <p className="or">Or</p>
          <button className="gotoSignupbtn" style={{cursor: 'pointer'}} onClick={toSignupPage}>Go to Sign up</button>
          <button className="demouserlogin" style={{cursor: 'pointer'}} type="submit">Log in as Demo user</button>

        </form>
      </div>
      <div>
        <GlobalFooter />

      </div>

    </div>
  );

}

export default LoginFormPage;
