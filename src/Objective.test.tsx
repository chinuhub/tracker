import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Objective from "./Objective";

test('renders learn react link', () => {
    render(<Objective />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});