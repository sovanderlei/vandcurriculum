import { render, screen } from '@testing-library/react';
import App from './App';

test('renders language toolbar', () => {
  global.fetch = jest.fn(() => new Promise(() => {}));
  render(<App />);
  expect(screen.getByText('PT')).toBeInTheDocument();
  expect(screen.getByText('EN')).toBeInTheDocument();
});
