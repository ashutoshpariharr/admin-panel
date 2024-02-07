import { Button, Container, CssBaseline, Typography, TextField, Link, Grid, Paper, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';


function Signup() {

const theme = createTheme();

  const [isLogin, setIsLogin] = React.useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login or signup logic here
  };

  return (
    <Box sx={{ position: 'absolute', top: '50%', left: '60%', transform: 'translate(-50%, -50%)' }}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5">
            {isLogin ? 'Login' : 'Sign Up'}
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '10px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                />
              </Grid>
              {!isLogin && (
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                  />
                </Grid>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ marginTop: '20px' }}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
            <Grid container justifyContent="flex-end" style={{ marginTop: '10px' }}>
              <Grid item>
                <Link onClick={handleToggle} sx={{ cursor: 'pointer', marginRight: '50px', textDecoration: 'none'}}>
                  {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
    </Box>
  );
}


export default Signup
