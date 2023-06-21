import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Head from "next/head";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/signin');
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    router.push(`/course?search=${searchQuery}`);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Head>
        <title>Course Helper</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Helper
          </Typography>
          <Button color="inherit" onClick={handleSignIn}>
            SignIn
          </Button>
        </Toolbar>
      </AppBar>
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
            <SearchIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Search Course
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSearch}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="course title"
              label="Enter course title"
              name="course-title"
              autoComplete="course-title"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}

            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSearch}>
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
