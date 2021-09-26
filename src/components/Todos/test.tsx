import mock from 'components/Todos/mock'
import { render, screen } from 'utils/test-utils'

import Todo from '.'

describe('<Todos />', () => {
  it('should render correctly', () => {
    render(<Todo {...mock} />)

    expect(
      screen.getByRole('heading', { name: /Hi Alan Gabriel!/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/20 tasks/i)).toBeInTheDocument()

    expect(screen.getAllByRole('listitem')).toHaveLength(20)
  })

  it('should render number of taks not plural', () => {
    render(
      <Todo
        todos={[{ userId: 1, id: 1, title: 'Test 1', completed: false }]}
        user={{
          name: 'Alan Gabriel',
          id: 1
        }}
      />
    )

    expect(
      screen.getByRole('heading', { name: /Hi Alan Gabriel!/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/1 task/i)).toBeInTheDocument()

    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })
})
