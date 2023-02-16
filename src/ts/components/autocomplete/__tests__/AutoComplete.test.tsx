import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AutoComplete from "../AutoComplete";

describe("AutoComplete", () => {
    test("has default value", () => {
        const autocomplete = render(
            <AutoComplete
                id="autocomplete_test"
                options={[{ label: "default", value: "default" }]}
                default_value="default"
            />
        );

        expect(
            autocomplete.container.querySelector("#autocomplete_test")
        ).toHaveValue("default");
    });

    test("on events", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const autocomplete = render(
            <AutoComplete
                id="autocomplete_test"
                options={[
                    { label: "opt_1", value: "opt_1" },
                    { label: "opt_2", value: "opt_2" },
                ]}
                allow_clear={true}
                setProps={mockSetProps}
            />
        );
        const autocompleteElement =
            autocomplete.container.querySelector("#autocomplete_test");
        expect(autocompleteElement).not.toHaveValue();

        const input = render(<input id="other_input" />);
        const inputElement = input.container.querySelector("#other_input");

        // test onFocus, onChange, onSelect
        await user.click(autocompleteElement);
        await user.type(autocompleteElement, "opt_");

        const firstOptionElement = document.querySelector(
            ".ant-select-item-option-content"
        );
        await user.click(firstOptionElement);

        expect(autocompleteElement).toHaveValue("opt_1");

        expect(
            mockSetProps.mock.calls.filter((x) =>
                Object.keys(x[0]).includes("n_onFocus")
            )[0][0].n_onFocus
        ).toEqual(1);
        expect(
            mockSetProps.mock.calls.filter((x) =>
                Object.keys(x[0]).includes("n_onSelect")
            )
        ).toHaveLength(1);
        expect(
            mockSetProps.mock.calls.filter((x) =>
                Object.keys(x[0]).includes("n_onSelect")
            )[0][0].value
        ).toEqual("opt_1");
        expect(
            mockSetProps.mock.calls.filter((x) =>
                Object.keys(x[0]).includes("n_onChange")
            )
        ).toHaveLength(5); // typed 4 chars "opt_" + selected once

        // test clear
        const clearElement =
            autocomplete.container.querySelector(".ant-select-clear");
        await user.click(clearElement);
        expect(autocompleteElement).not.toHaveValue();

        // test onBlur
        await user.click(inputElement);
        expect(
            mockSetProps.mock.calls.filter((x) =>
                Object.keys(x[0]).includes("n_onBlur")
            )
        ).toHaveLength(1);
    });
});
