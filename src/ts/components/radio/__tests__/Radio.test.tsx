import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Radio from "../Radio";

describe("Radio", () => {
    test("renders its content", () => {
        const { container } = render(<Radio>Some Radio content</Radio>);

        expect(container).toHaveTextContent("Some Radio content");
    });

    test("updates checked prop when clicked", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const checkbox = render(
            <Radio setProps={mockSetProps}>Clickable</Radio>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(checkbox.queryByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].checked).toBe(true);
    });
});
