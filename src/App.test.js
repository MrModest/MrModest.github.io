import React from 'react';
import { render } from '@testing-library/react';
import AppWrapper from './AppWrapper';

test('renders For communicate header', () => {
  const { getByText } = render(<AppWrapper />);
  const linkElement = getByText(/For communicate/i);
  expect(linkElement).toBeInTheDocument();
});
