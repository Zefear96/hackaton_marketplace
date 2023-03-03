import React, { useState } from 'react';
// import { useAuth } from '../contexts/AuthContextProvider'; //свой путь
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContextProvider';

const RegistrationPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')

  const { register, error } = useAuth(); //вытаскивает контекст

  const navigate = useNavigate();

  return (
    <div style={style}>

      {error ? (
        <h3>{error}</h3>
      ) : (
        ''
      )}

      <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
      <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
      <input type="text" placeholder='email' onChange={e => setEmail(e.target.value)} />
      <button onClick={() => register(username, password, email)}>Register</button>
    </div>
  )
  }
export default RegistrationPage