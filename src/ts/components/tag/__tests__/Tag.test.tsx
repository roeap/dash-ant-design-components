import React from "react";
import { render } from "@testing-library/react";
import Tag from "../Tag";

describe("Tag", () => {
    test("renders its content", () => {
        const { container } = render(<Tag>tag-content</Tag>);

        expect(container).toHaveTextContent("tag-content");
    });
});
