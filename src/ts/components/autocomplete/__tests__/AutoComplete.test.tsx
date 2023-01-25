import React from "react";
import { render } from "@testing-library/react";
import AutoComplete from "../AutoComplete";

describe("AutoComplete", () => {
    test("renders its message", () => {
        const { container } = render(<AutoComplete allowClear={false} defaultActiveFirstOption={false} />);
        //
        // expect(container).toHaveTextContent("alert-message");
    });
});
