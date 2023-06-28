import { render, screen } from '@testing-library/react'
import Greet from '../components/greet/greet'

describe('Greet', () => {
  it('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  it('renders name', () => {
    render(<Greet name="Esra" />)
    const textElement = screen.getByText('Hello Esra')
    expect(textElement).toBeInTheDocument()
  })
})
