import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import TaskInput from './components/TaskInput';

describe('App', () => {

    it('renders headline', () => {
        render(<App/>);
        // screen.debug();
        // check if App components renders headline
        expect(screen.getByRole("heading")).toHaveTextContent("Todos");
    });

    it('inserts a new task', async () => {
        const user = userEvent.setup();
        render(<App/>);

        const testString = "run tests";

        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");

        await user.type(input, testString);
        await user.click(button);

        const listitems = screen.getAllByRole("listitem");

        // screen.debug();
        // check if App components renders headline
        expect(screen.getByRole("heading")).toHaveTextContent("Todos");
        expect(listitems.at(-1)).toHaveTextContent(testString);
    });

    it('deletes a task', async() => {
        const user = userEvent.setup();
        render(<App/>);

        const testString = "run tests";

        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");

        await user.type(input, testString);
        await user.click(button);

        const lastlistitem = screen.getAllByRole("listitem").at(-1);
        const svgIcon = lastlistitem.querySelector(".taskIcon");

        // expect(lastlistitem).toBeInTheDocument();
        await user.click(svgIcon);

        expect(lastlistitem).not.toBeInTheDocument();
    });
});

describe('TaskInput', () => {
    it('disables the add button when there is no input text', async() => {
        const user = userEvent.setup();
        render(<TaskInput/>);

        const testString = "run tests";

        const outerDiv = screen.getAllByRole("generic")[0];

        const input = outerDiv.querySelector("input");
        const button = outerDiv.querySelector(".addButton");

        // const input = screen.getByRole("textbox");
        // const button = screen.getByRole("button");

        expect(button).toBeDisabled();
        await user.type(input, testString);

        expect(button).not.toBeDisabled();
    });
});
