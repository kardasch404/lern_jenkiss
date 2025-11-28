import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders Vite + React heading', () => {
  render(<App />)
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})

test('counter increments when button is clicked', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /count is 0/i })
  fireEvent.click(button)
  expect(screen.getByText('count is 1')).toBeInTheDocument()
})