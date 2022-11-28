import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckableTag from "../CheckableTag";

describe("CheckableTag", () => {
    test("renders its content", () => {
        const { container } = render(
            <CheckableTag>Some Tag content</CheckableTag>
        );

        expect(container).toHaveTextContent("Some Tag content");
    });

    test("updates checked prop when clicked", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const checkableTag = render(
            <CheckableTag setProps={mockSetProps}>Clickable</CheckableTag>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(checkableTag.queryByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].checked).toBe(true);
    });
});
