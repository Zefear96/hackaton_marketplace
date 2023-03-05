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

const RegistrationPage = () => {
  const { users, checkUniqueUser, getUsers, register } = useAuth();

  const USER_STATE = {
    username: "",
    email: "",
    password: "",
    passConf: "",
    favorites: [],
    saved: []
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState(USER_STATE);

  const handleInp = (e) => {
    let userObj = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(userObj);
  };

  function checkData(user) {
    if (checkUniqueUser(user.username)) {
      alert("User already exists!");
      return;
    }

    if (user.password !== user.passConf) {
      alert("Passwords don't match!");
      return;
    }

    register(user);
  }

  const navigate = useNavigate();

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
            REGISTER
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
                  autoComplete="new-username"
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
                  autoComplete="new-email"
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
                  autoComplete="new-password"
                  onChange={handleInp}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="confpassword"
                  label="Confirm Password"
                  name="passConf"
                  autoComplete="confpassword"
                  onChange={handleInp}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => checkData(user)}
            >
              Register
            </Button>
            <Grid container justifyContent="center" style={{marginBottom: '3%'}}>
              <Grid item>
                <Link onClick={() => navigate('/login')} variant="body2" style={{color: 'white'}}>
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
};
export default RegistrationPage;
