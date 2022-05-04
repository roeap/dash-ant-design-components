import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../Input";

describe("Input", () => {
    test("has no value by default", () => {
        const input = render(<Input />);

        expect(input.container.firstChild).not.toHaveValue();
    });

    test("passes value on to the underlying HTML input", () => {
        const {
            container: { firstChild: input },
            rerender,
        } = render(<Input value="some-input-value" />);

        expect(input).toHaveValue("some-input-value");

        rerender(<Input value="another-input-value" />);
        expect(input).toHaveValue("another-input-value");
    });

    describe("setProps", () => {
        let inputElement, mockSetProps;
        const user = userEvent.setup();

        beforeEach(() => {
            mockSetProps = jest.fn();
            const { container } = render(<Input setProps={mockSetProps} />);
            inputElement = container.firstChild;
        });

        test('tracks changes with "value" prop', () => {
            fireEvent.change(inputElement, {
                target: { value: "some-input-value" },
            });
            expect(mockSetProps.mock.calls).toHaveLength(1);
            expect(mockSetProps.mock.calls[0][0]).toEqual({
                value: "some-input-value",
            });
        });

        test("dispatches update for each typed character", async () => {
            await user.type(inputElement, "abc");

            expect(mockSetProps.mock.calls).toHaveLength(3);

            const [call1, call2, call3] = mockSetProps.mock.calls;
            expect(call1).toEqual([{ value: "a" }]);
            expect(call2).toEqual([{ value: "ab" }]);
            expect(call3).toEqual([{ value: "abc" }]);
        });

        test('track number of blurs with "n_blur" and "n_blur_timestamp"', () => {
            const before = Date.now();
            fireEvent.blur(inputElement);
            const after = Date.now();

            expect(mockSetProps.mock.calls).toHaveLength(1);

            const [[{ n_blur, n_blur_timestamp }]] = mockSetProps.mock.calls;
            expect(n_blur).toEqual(1);
            expect(n_blur_timestamp).toBeGreaterThanOrEqual(before);
            expect(n_blur_timestamp).toBeLessThanOrEqual(after);
        });

        test('tracks submit with "n_submit" and "n_submit_timestamp"', () => {
            const before = Date.now();
            fireEvent.keyPress(inputElement, {
                key: "Enter",
                code: 13,
                charCode: 13,
            });
            const after = Date.now();

            expect(mockSetProps.mock.calls).toHaveLength(1);

            const [[{ n_submit, n_submit_timestamp }]] =
                mockSetProps.mock.calls;
            expect(n_submit).toEqual(1);
            expect(n_submit_timestamp).toBeGreaterThanOrEqual(before);
            expect(n_submit_timestamp).toBeLessThanOrEqual(after);
        });

        test("don't increment n_submit if key is not Enter", () => {
            fireEvent.keyPress(inputElement, {
                key: "a",
                code: 65,
                charCode: 65,
            });
            expect(mockSetProps.mock.calls).toHaveLength(0);
        });
    });

    describe("debounce", () => {
        let inputElement, mockSetProps;
        beforeEach(() => {
            mockSetProps = jest.fn();
            const { container } = render(
                <Input
                    setProps={mockSetProps}
                    value="some-input-value"
                    debounce
                />
            );
            inputElement = container.firstChild;
        });

        test("don't call setProps on change if debounce is true", () => {
            fireEvent.change(inputElement, {
                target: { value: "some-input-value" },
            });
            expect(mockSetProps.mock.calls).toHaveLength(0);
            expect(inputElement).toHaveValue("some-input-value");
        });

        test("dispatch value on blur if debounce is true", () => {
            const before = Date.now();
            fireEvent.blur(inputElement);
            const after = Date.now();

            expect(mockSetProps.mock.calls).toHaveLength(1);

            const [[{ n_blur, n_blur_timestamp, value }]] =
                mockSetProps.mock.calls;
            expect(n_blur).toEqual(1);
            expect(n_blur_timestamp).toBeGreaterThanOrEqual(before);
            expect(n_blur_timestamp).toBeLessThanOrEqual(after);
            expect(value).toEqual("some-input-value");
        });

        test("dispatch value on submit if debounce is true", () => {
            const before = Date.now();
            fireEvent.keyPress(inputElement, {
                key: "Enter",
                code: 13,
                charCode: 13,
            });
            const after = Date.now();

            expect(mockSetProps.mock.calls).toHaveLength(1);

            const [[{ n_submit, n_submit_timestamp, value }]] =
                mockSetProps.mock.calls;
            expect(n_submit).toEqual(1);
            expect(n_submit_timestamp).toBeGreaterThanOrEqual(before);
            expect(n_submit_timestamp).toBeLessThanOrEqual(after);
            expect(value).toEqual("some-input-value");
        });
    });

    describe("number input", () => {
        let inputElement, mockSetProps;

        beforeEach(() => {
            mockSetProps = jest.fn();
            const { container } = render(
                <Input setProps={mockSetProps} type="number" />
            );
            inputElement = container.firstChild;
        });

        test('tracks changes with "value" prop', () => {
            fireEvent.change(inputElement, {
                target: { value: 12 },
            });
            expect(inputElement).toHaveValue(12);

            fireEvent.change(inputElement, {
                target: { value: -42 },
            });
            expect(inputElement).toHaveValue(-42);

            // fireEvent.change(inputElement, {
            //     target: { value: 1.01 },
            // });
            // expect(inputElement).toHaveValue(1.01);

            fireEvent.change(inputElement, {
                target: { value: 0 },
            });
            expect(inputElement).toHaveValue(0);

            // expect(mockSetProps.mock.calls).toHaveLength(4);

            const [call1, call2, call3] = mockSetProps.mock.calls;
            expect(call1).toEqual([{ value: 12 }]);
            expect(call2).toEqual([{ value: -42 }]);
            // expect(call3).toEqual([{ value: 1.01 }]);
            expect(call3).toEqual([{ value: 0 }]);
        });

        // test("dispatches update for each typed character", () => {
        //     userEvent.type(inputElement, "-1e4");

        //     expect(inputElement).toHaveValue(-10000);
        //     expect(mockSetProps.mock.calls).toHaveLength(2);

        //     const [call1, call3] = mockSetProps.mock.calls;
        //     expect(call1).toEqual([{ value: -1 }]);
        //     expect(call3).toEqual([{ value: -10000 }]);
        // });

        test("only accepts numeric input", () => {
            userEvent.type(inputElement, "asdf?");

            expect(inputElement).not.toHaveValue();
            expect(mockSetProps.mock.calls).toHaveLength(0);
        });
    });
});
