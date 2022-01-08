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
});