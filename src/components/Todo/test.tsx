import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import Todo from '.'

const todo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
}

describe('<Todo />', () => {
  it('should start unchecked when complete.', () => {
    render(<Todo {...todo} />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('should start marked when complete', () => {
    render(<Todo {...todo} completed={true} />)

    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('should mark the checkbox when clicked on it', async () => {
    render(<Todo {...todo} />)

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(screen.getByRole('checkbox')).toBeChecked()
    })
  })
})
