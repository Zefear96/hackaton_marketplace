import React, { useState } from 'react';
// import { useAuth } from '../contexts/AuthContextProvider'; //свой путь
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useAuth(); //вытаскивает контекст

  return (
    <div style={style}>

      {error ? (
        <h3>{error}</h3>
      ) : (
        ''
      )}

      <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
      <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  )
}

export default LoginPage