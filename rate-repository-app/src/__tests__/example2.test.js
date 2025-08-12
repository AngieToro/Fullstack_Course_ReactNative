import React from 'react';
import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

test('smoke', () => {
  render(<Text>Hello</Text>);
  expect(screen.getByText('Hello')).toBeTruthy();
});