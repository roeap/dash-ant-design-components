import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "../Checkbox";

describe("Checkbox", () => {
    test("renders its content", () => {
        const { container } = render(
            <Checkbox>Some Checkbox content</Checkbox>
        );

        expect(container).toHaveTextContent("Some Checkbox content");
    });

    test("updates checked prop when clicked", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const checkbox = render(
            <Checkbox setProps={mockSetProps}>Clickable</Checkbox>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(checkbox.queryByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].checked).toBe(true);
    });
});
