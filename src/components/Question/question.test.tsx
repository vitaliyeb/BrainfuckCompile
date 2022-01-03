import React from 'react'
import {render, screen} from '@testing-library/react'
import Question from "./index";
import userEvent from '@testing-library/user-event'

it('the modal opens and closes', async () => {
  render(<Question />);
  const button = screen.getByText(/\?/);
  expect(button).toBeInTheDocument();
  expect(screen.queryByTestId('questionModal')).not.toBeInTheDocument();

  userEvent.click(button);

  expect(screen.getByTestId('questionModal')).toBeInTheDocument();
});
