import React from "react";
import { render } from "@testing-library/react";
import Select from "../Select";

describe("Select", () => {
    test("renders its selected option", () => {
        const { container } = render(
            <Select
                options={[
                    { label: "opt1", value: "val1" },
                    { label: "opt2", value: "val2" },
                ]}
                value="opt1"
            />
        );

        expect(container).toHaveTextContent("opt1");
    });
});
