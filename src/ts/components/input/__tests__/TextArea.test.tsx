import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "../TextArea";

describe("Textarea", () => {
    describe("setProps", () => {
        let textarea, mockSetProps;

        beforeEach(() => {
            mockSetProps = jest.fn();
            const { container } = render(<Textarea setProps={mockSetProps} />);
            textarea = container.firstChild;
        });

        test('tracks changes with "value" prop', () => {
            fireEvent.change(textarea, {
                target: { value: "some-textarea-value" },
            });
            expect(mockSetProps.mock.calls).toHaveLength(1);
            expect(mockSetProps.mock.calls[0][0]).toEqual({
                value: "some-textarea-value",
            });
            expect(textarea).toHaveValue("some-textarea-value");
        });

        test("dispatches update for each typed character", async () => {
            await userEvent.type(textarea, "abc");

            expect(textarea).toHaveValue("abc");
            expect(mockSetProps.mock.calls).toHaveLength(4);

            const [call0, call1, call2, call3] = mockSetProps.mock.calls;
            expect(call1).toEqual([{ value: "a" }]);
            expect(call2).toEqual([{ value: "ab" }]);
            expect(call3).toEqual([{ value: "abc" }]);
        });

        test('track number of blurs with "n_blur" and "n_blur_timestamp"', () => {
            const before = Date.now();
            fireEvent.blur(textarea);
            const after = Date.now();

            expect(mockSetProps.mock.calls).toHaveLength(1);

            const [[{ n_blur, n_blur_timestamp }]] = mockSetProps.mock.calls;
            expect(n_blur).toEqual(1);
            expect(n_blur_timestamp).toBeGreaterThanOrEqual(before);
            expect(n_blur_timestamp).toBeLessThanOrEqual(after);
        });

        test('tracks submit with "n_submit" and "n_submit_timestamp"', () => {
            const before = Date.now();
            fireEvent.keyPress(textarea, {
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
            fireEvent.keyPress(textarea, { key: "a", code: 65, charCode: 65 });
            expect(mockSetProps.mock.calls).toHaveLength(0);
        });

        describe("debounce", () => {
            let textarea, mockSetProps;
            beforeEach(() => {
                mockSetProps = jest.fn();
                const { container } = render(
                    <Textarea
                        setProps={mockSetProps}
                        value="some-textarea-value"
                        debounce
                    />
                );
                textarea = container.firstChild;
            });

            test("don't call setProps on change if debounce is true", () => {
                fireEvent.change(textarea, {
                    target: { value: "some-textarea-value" },
                });
                expect(mockSetProps.mock.calls).toHaveLength(0);
                expect(textarea).toHaveValue("some-textarea-value");
            });

            test("dispatch value on blur if debounce is true", () => {
                const before = Date.now();
                fireEvent.blur(textarea);
                const after = Date.now();

                expect(mockSetProps.mock.calls).toHaveLength(1);

                const [[{ n_blur, n_blur_timestamp, value }]] =
                    mockSetProps.mock.calls;
                expect(n_blur).toEqual(1);
                expect(n_blur_timestamp).toBeGreaterThanOrEqual(before);
                expect(n_blur_timestamp).toBeLessThanOrEqual(after);
                expect(value).toEqual("some-textarea-value");
            });

            test("dispatch value on submit if debounce is true", () => {
                const before = Date.now();
                fireEvent.keyPress(textarea, {
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
                expect(value).toEqual("some-textarea-value");
            });
        });
    });
});
