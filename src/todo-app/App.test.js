import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('app not broken', () => {
  render(<App />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});