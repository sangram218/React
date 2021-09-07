import { render, screen } from '@testing-library/react';
import App from './App';

test('test',()=>{
  expect(true).toBe(true)
})

test('should render',()=>{
  render(<App/>)
  const appElement = screen.getByTestId('id-1')
  expect(appElement).toBeInTheDocument()
})

test('should render div',()=>{
  render(<App/>)
  const appElement1 = screen.getByTestId('id-3')
  expect(appElement1).toBeInTheDocument()
})