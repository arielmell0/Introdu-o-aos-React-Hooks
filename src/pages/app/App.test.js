import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from './App';

const response = {
    speaker:'Speaker',
    quote: 'test quote'
}

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
)

test('renders the app, with a button', () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');
    const textEl = screen.getByText(/Loading Speaker/);

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
});

test('calls api on button click and update its text', async () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    const quoteEl = await screen.findByText(response.quote);

    expect(quoteEl).toBeInTheDocument();
});

test('calls api on startup and renders it response', async () => {
    render(<App />);

    const quoteEl = await screen.findByAltText(response.quote);

    expect(quoteEl).toBeInTheDocument();
})