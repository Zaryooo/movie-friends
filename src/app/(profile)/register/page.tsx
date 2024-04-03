'use client';

import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from '@mui/material';
import Breadcrumb from '@/components/breadcrumb';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const onSubmitHandler = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <>
      <Breadcrumb title='Login' />
      <Container component='div' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component='form'
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='passwordAgain'
              label='Password Again'
              type='password'
              id='passwordAgain'
              autoComplete='current-password'
              onChange={(e: any) => setPasswordAgain(e.target.value)}
            />
            <Button
              onClick={onSubmitHandler}
              fullWidth
              variant='contained'
              className='btn-submit'
              sx={{ mt: 3, mb: 2 }}
              disabled={!email || !password}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
