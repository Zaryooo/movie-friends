import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../../src/components/breadcrumb';


describe('Breadcrumb', () => {
  test('renders a breadcrumb', () => {
      render(<Breadcrumb title="Breadcrumb heading"/>)
   
      const heading = screen.getByRole('heading', { level: 1 })
   
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent("Breadcrumb heading")
    });
  })