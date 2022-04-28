// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
    it('renders a unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
    })

    it('renders a component', () => {
      const { main } = render(<Home/>)
      expect(main).toMatchSnapshot()
    })
})
