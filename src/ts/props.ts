/**
 * Every Dash components are given these props.
 * Use with your own props:
 * ```
 * type Props = {
 *     my_prop: string;
 * } & DashComponentProps;
 * ```
 * Recommended to use `type` instead of `interface` so you can define the
 * order of props with types concatenation.
 */
export type DashComponentProps = {
    /**
     * Unique ID to identify this component in Dash callbacks.
     */
    id?: string;
    /**
     * Update props to trigger callbacks.
     */
    setProps?: (props: Record<string, any>) => void;
};

/**
 * Object that holds the loading state object coming from dash-renderer
 */
export type DashLoadingState = {
    /**
     * Determines if the component is loading or not
     */
    is_loading: boolean;
    /**
     * Holds which property is loading
     */
    prop_name: string;
    /**
     * Holds the name of the component that is loading
     */
    component_name: string;
};
