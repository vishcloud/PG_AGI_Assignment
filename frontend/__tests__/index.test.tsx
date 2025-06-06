import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

describe('Home', () => {
  it('renders heading', () => {
    render(<Home />);
    const heading = screen.getByText(/DevOps Assignment Frontend/i);
    expect(heading).toBeInTheDocument();
  });
});
