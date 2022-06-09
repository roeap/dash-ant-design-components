import { ReactNode } from "react";
import { isNil } from "ramda";

function isNodeArray<T>(node: T | T[]): node is T[] {
    return Array.isArray(node);
}

function isString(string: string) {
    return typeof string === "string";
}

export function isStringWithCharacters(string: string) {
    return isString(string) && string.length > 0;
}

export function parseChildrenToArray<T>(children?: T | T[]): T[] {
    if (children) {
        if (!isNodeArray(children)) {
            return [children];
        }
        return children;
    }
    return [];
}

function isUndefined(obj?: unknown): obj is null | undefined {
    return obj === undefined || obj === null;
}

export function getComponentType(component: ReactNode): string {
    if (!component || isUndefined(component)) return "";
    if (typeof component === "string") return "string";
    if (typeof component === "number") return "number";
    if (typeof component === "boolean") return "boolean";
    if (!("props" in component)) return "object";
    if (
        // disabled is a defaultProp (so it's always set)
        // meaning that if it's not set on component.props, the actual
        // props we want are lying a bit deeper - which means they
        // are coming from Dash
        isNil(component.props.disabled) &&
        component.props._dashprivate_layout &&
        component.props._dashprivate_layout.props
    ) {
        // props are coming from Dash
        return component.props._dashprivate_layout.type;
    }
    // else props are coming from React
    // @ts-expect-error ts does not know what we know
    return component.type.name;
}

export function getComponentProps(
    component: ReactNode
): Record<string, unknown> {
    if (!component || isUndefined(component)) return {};
    if (typeof component === "string") return {};
    if (typeof component === "number") return {};
    if (typeof component === "boolean") return {};
    if (!("props" in component)) return {};
    if (
        // disabled is a defaultProp (so it's always set)
        // meaning that if it's not set on component.props, the actual
        // props we want are lying a bit deeper - which means they
        // are coming from Dash
        isNil(component.props.disabled) &&
        component.props._dashprivate_layout &&
        component.props._dashprivate_layout.props
    ) {
        // props are coming from Dash
        return component.props._dashprivate_layout.props;
    }
    // else props are coming from React
    return component.props;
}
