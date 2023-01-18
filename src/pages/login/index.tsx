import React, {useState, useReducer, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link, useNavigate } from 'react-router-dom';

import {reducer} from './reducer';
import {initialState} from './initialState';

const theme = createTheme();

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const navigate = useNavigate();

    useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
        dispatch({
        type: 'setIsButtonDisabled',
        payload: false
        });
    } else {
        dispatch({
        type: 'setIsButtonDisabled',
        payload: true
        });
    }
    }, [state.username, state.password]);

    const handleLogin = () => {
    if (state.username === 'test@email.com' && state.password === 'password') {
        dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
        });
        navigate("/receptionist/dashboard");
    } else {
        dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
        });
    }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
        state.isButtonDisabled || handleLogin();
    }
    };

    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
        dispatch({
        type: 'setUsername',
        payload: event.target.value
        });
    };

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
        dispatch({
        type: 'setPassword',
        payload: event.target.value
        });
    }
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                error = {state.isError}
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                autoFocus
              />
              <TextField
                error = {state.isError}
                helperText={state.helperText}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
                disabled={state.isButtonDisabled}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      );
};

export default Login;