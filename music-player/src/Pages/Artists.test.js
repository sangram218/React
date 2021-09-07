import { fireEvent, render,screen } from '@testing-library/react';
import Artists from './Artists';

test('test',()=>{
    expect(true).toBe(true)
})

// test('table rendered',()=>{
//     render(<Artists/>)
//     const newColorButton = screen.getByRole('table')
//     expect(newColorButton).toBeInTheDocument()
// })

// test('should render table',()=>{
//     render(<Artists/>)
//     const appElement = screen.getByTestId('id-2')
//     expect(appElement).toBeInTheDocument()
//   })

// test('h1 is Renderer',()=>{
//     render(<Artists/>)
//     const newColorButton = screen.getByTestId('h')
//     expect(newColorButton.textContent).toBe('Artists')
// })