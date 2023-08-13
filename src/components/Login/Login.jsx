import '../Login/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import Alert from '../Alert/Alert';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const showAlertsuccess = () => {
    setAlertType('success');
    setAlertMessage('Logged in successfully!');
    setShowAlert(true);
    navigate('/');
  }

  useEffect(() => {
    if (error) {
      setAlertType('error');
      setAlertMessage(error);
      setShowAlert(true);
    }
    if(user){
      showAlertsuccess();
    }
  }, [error, user]);

  const handleHideAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='login-page'>
        <h3>Login Page</h3>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {showAlert && (
        <Alert type={alertType} message={alertMessage} onHide={handleHideAlert} />
      )}
    </div>
  );
};

export default LoginForm;
