import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /pratik kafle/i })).toBeInTheDocument();
  expect(screen.getByText('No-Food-Left-Behind')).toBeInTheDocument();
});
