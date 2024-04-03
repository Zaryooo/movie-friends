'use client';

import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from '@mui/material';
import Breadcrumb from '@/components/breadcrumb';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/app/firebase';

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState('');

  const onResetHandler = () => {
    sendPasswordResetEmail(auth, email)
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
            
            <Button
              onClick={onResetHandler}
              fullWidth
              variant='contained'
              className='btn-submit'
              sx={{ mt: 3, mb: 2 }}
              disabled={!email}
            >
              Sent Forgot Password Email
            </Button>
            
          </Box>
        </Box>
      </Container>
    </>
  );
}
