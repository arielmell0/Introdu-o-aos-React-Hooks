import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from './App';

test('renders the app, with a button', () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');
    const textEl = screen.getByText(/Speaker/);

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
})