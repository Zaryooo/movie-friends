'use client';

import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from '@mui/material';
import Breadcrumb from '@/components/breadcrumb';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useFormik } from 'formik';
import { formSchema } from '@/schemas/validation';
import { useRouter } from 'next/navigation';

type formTypes = {
  email: string,
  password: string,
  confimPassword: string
}

export default function LoginPage() {
  const router = useRouter();

  const onSubmit = (values: formTypes) => {
    createUserWithEmailAndPassword(auth, values.email, values.password);
    router.push('/login')
  }

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confimPassword: ''
    },
    validationSchema: formSchema,
    onSubmit
  })

  return (
    <>
      <Breadcrumb title='Sign Up' />
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
            onSubmit={handleSubmit}
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
              value={values.email}
              error={errors.email && touched.email ? true : false}
              helperText={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
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
              value={values.password}
              error={errors.password && touched.password ? true : false}
              helperText={errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='confimPassword'
              label='Confirm Password'
              type='password'
              id='confimPassword'
              autoComplete='current-password'
              value={values.confimPassword}
              error={errors.confimPassword && touched.confimPassword ? true : false}
              helperText={errors.confimPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button
              type="submit"
              fullWidth
              variant='contained'
              className='btn-submit'
              sx={{ mt: 3, mb: 2 }}
              disabled={isSubmitting}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
