import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Popularity from '../../src/components/popularity';


describe('Popularity', () => {

    test('renders a popularity', () => {
      const { getByTestId } = render(<div data-testid="test-id"><Popularity popularity={1000} /></div>)
   
      const popularity = getByTestId('test-id');
   
      expect(popularity).toBeInTheDocument();

    });

    test('renders a popularity bar', () => {
      render(<div data-testid="test-id"><Popularity popularity={1000} /></div>)
   
      const bar = screen.getByRole('progressbar');
   
      expect(bar).toBeInTheDocument();

    });

    test('renders a popularity bar percentage', () => {
      render(<div data-testid="test-id"><Popularity popularity={1000} /></div>)
   
      const bar = screen.getByRole('progressbar');
   
      expect(bar).toHaveAttribute('aria-valuenow', '50');

    });
    
  })