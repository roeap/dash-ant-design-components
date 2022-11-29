import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioGroup from "../RadioGroup";

describe("RadioButton", () => {
    test("renders its content", () => {
        const { container } = render(
            <RadioGroup>Some RadioButton content</RadioGroup>
        );

        expect(container).toHaveTextContent("Some RadioButton content");
    });

    test("updates checked prop when clicked", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const checkbox = render(
            <RadioGroup
                setProps={mockSetProps}
                options={["foo", "bar", "baz"]}
            />
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(checkbox.queryByText("foo"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].value).toBe("foo");
    });
});
