import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rating from '../utils/Rating';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

test('renders the correct number of filled and empty stars', () => {
  render(<Rating value={5} />);

  const filledStars = screen.getAllByTestId('filled-star');
  expect(filledStars.length).toBe(5);

  const emptyStars = screen.getAllByTestId('empty-star');
  expect(emptyStars.length).toBe(5);
});

test('renders the correct number of filled stars when value is 0', () => {
  render(<Rating value={0} />);

  const filledStars = screen.queryAllByTestId('filled-star');
  expect(filledStars.length).toBe(0);

  const emptyStars = screen.getAllByTestId('empty-star');
  expect(emptyStars.length).toBe(10);
});

test('renders the correct number of filled stars when value is 10', () => {
  render(<Rating value={10} />);

  const filledStars = screen.getAllByTestId('filled-star');
  expect(filledStars.length).toBe(10);

  const emptyStars = screen.queryAllByTestId('empty-star');
  expect(emptyStars.length).toBe(0);
});
