import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Login from '../../src/app/(profile)/login/page';
import {
  TextField
} from '@mui/material';


describe('Login', () => {
    it('renders a heading', () => {
      render(<Login/>)
   
      const heading = screen.getByRole('heading', { level: 1 })
   
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent("Sign In")
    })

    test('Input renders correctly with type email', () => {
      const { container } = render(<TextField name="email" type="email" />);
      const input = container.querySelector('input[type="email"]');
      waitFor(() => expect(input).toBeInTheDocument());
    });
  })