// src/Card.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('Card component renders without crashing', () => {
  render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
});

test('Card component matches snapshot', () => {
	const { asFragment } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
	expect(asFragment()).toMatchSnapshot();
  });

  