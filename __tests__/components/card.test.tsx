import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '../../src/components/card';


describe('Card', () => {
    test('renders a card', () => {
      const { getByTestId } = render(<div data-testid="test-id"><Card id='movie-1' title='Movie title' overview='Movie overview' poster_path='poster-path'/></div>)
   
      const card = getByTestId('test-id');
   
      expect(card).toBeInTheDocument();
      expect(card.firstChild).toBeInTheDocument();
      expect(card.firstChild).toHaveClass('card');
    });
    
    test('renders a link', () => {
      const { container } = render(<Card id='movie-1' title='Movie title' overview='Movie overview' poster_path='poster-path'/>)
   
      const link = container.querySelector('.card-link');
   
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('title', 'Movie title');
      expect(link).toHaveAttribute('href', 'movies/movie-1');
    });

    test('renders a title', () => {
      const { container } = render(<Card id='movie-1' title='Movie title' overview='Movie overview' poster_path='poster-path'/>)
   
      const title = container.querySelector('.card-title') as HTMLElement;
   
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Movie title');
    });

    test('renders a overview', () => {
      const { container } = render(<Card id='movie-1' title='Movie title' overview='Movie overview' poster_path='poster-path'/>)
   
      const overview = container.querySelector('.card-overview') as HTMLElement;
   
      expect(overview).toBeInTheDocument();
      expect(overview).toHaveTextContent('Movie overview... more');
    });
  })