import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioButton from "../RadioButton";

describe("RadioButton", () => {
    test("renders its content", () => {
        const { container } = render(
            <RadioButton>Some RadioButton content</RadioButton>
        );

        expect(container).toHaveTextContent("Some RadioButton content");
    });

    test("updates checked prop when clicked", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const checkbox = render(
            <RadioButton setProps={mockSetProps}>Clickable</RadioButton>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(checkbox.queryByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].checked).toBe(true);
    });
});
