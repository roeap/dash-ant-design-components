import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckboxGroup from "../CheckboxGroup";

describe("CheckboxGroup", () => {
    test("renders its content", () => {
        const { container } = render(
            <CheckboxGroup>Some CheckboxGroup content</CheckboxGroup>
        );

        expect(container).toHaveTextContent("Some CheckboxGroup content");
    });

    test("updates checked prop when clicked", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const checkbox = render(
            <CheckboxGroup options={["foo", "bar"]} setProps={mockSetProps} />
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(checkbox.queryByText("foo"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].value).toStrictEqual(["foo"]);
    });
});
