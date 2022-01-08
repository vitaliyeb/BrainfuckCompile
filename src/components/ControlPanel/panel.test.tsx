import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import ControlPanel from "./index";

describe('ControlPanel component', function () {

    beforeEach(() => {
        const code = `,.>,.>++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++
                      .>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.
                      ------.--------.>+.>.`;
        render(<ControlPanel code={code} />);
        userEvent.click(screen.getByText(/Run/));
    })

    it('render Hello World!', () => {
        expect(screen.getByText(/Hello World!/)).toBeInTheDocument();
    });

    it('correct result in decimal', () => {
        userEvent.click(screen.getByText(/DEC/));
        expect(screen.getByText(/007210110810811132871111141081003310/)).toBeInTheDocument();
    });

    it('correct result for input parameters', () => {
        const inputField = screen.getByTestId('inputParametrsField');
        expect(inputField.classList.length).toBe(1);
        userEvent.click(screen.getByText(/Input/));
        expect(inputField.classList.length).toBe(2);
        userEvent.type(inputField, '100,72');
        userEvent.click(screen.getByText(/Run/));
        expect(screen.getByText(/dHHello World!/)).toBeInTheDocument();
    });
});