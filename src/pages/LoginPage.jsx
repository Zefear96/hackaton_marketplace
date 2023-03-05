import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

//mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const LoginPage = () => {
  const { checkUserInUsers, checkUserPassword, login, users, getUsers } =
    useAuth();

  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInp = (e) => {
    let obj = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(obj);
  };

  function authorization(user) {
    let userObj = checkUserInUsers(user.username);
    console.log(userObj);
    console.log(user);

    if (!userObj) {
      alert("User Not Found!");
      return;
    }

    if (!checkUserPassword(userObj, user.password)) {
      alert("Passwords don't match");
      return;
    }

    login(userObj.username);
  };

  //styles
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#bc9366',
      },
    },
  });

  const style={
    backgroundImage: `url('https://www.donjulio.com/images/footer-bg.jpg')`,
    width: '100%',
    height: '100vh'
  }

  return (
    <div style={style}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: '#bc9366' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color='#ffffff'>
            LOGIN
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="old-username"
                  onChange={handleInp}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="old-email"
                  onChange={handleInp}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="old-password"
                  onChange={handleInp}
                  />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => authorization(user)}
              style={{marginBottom: '3%'}}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
};

export default LoginPage;
{/* <input
type="text"
placeholder="username"
onChange={handleInp}
name="username"
/>
<input
type="text"
placeholder="email"
onChange={handleInp}
name="email"
/>
<input
type="text"
placeholder="password"
onChange={handleInp}
name="password"
/>
<button onClick={() => authorization(user)}>Login</button> */}