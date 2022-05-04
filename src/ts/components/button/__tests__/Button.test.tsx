import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";

describe("Button", () => {
    test("renders its content", () => {
        const { container } = render(<Button>Some button content</Button>);

        expect(container).toHaveTextContent("Some button content");
    });

    test("tracks clicks with n_clicks", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const { container } = render(
            <Button setProps={mockSetProps}>Clickable</Button>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(container.querySelector(".ant-btn"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].n_clicks).toBe(1);
    });

    test("doesn't track clicks if disabled", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();
        const { container } = render(
            <Button disabled={true} setProps={mockSetProps}>
                Clickable
            </Button>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(container.querySelector(".ant-btn"));

        expect(mockSetProps.mock.calls).toHaveLength(0);
    });
});
