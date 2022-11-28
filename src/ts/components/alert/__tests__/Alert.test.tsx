import React from "react";
import { render } from "@testing-library/react";
import Alert from "../Alert";

describe("Alert", () => {
    test("renders its message", () => {
        const { container } = render(<Alert message="alert-message" />);

        expect(container).toHaveTextContent("alert-message");
    });
});
