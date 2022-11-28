import React, { ReactNode, useMemo } from "react";
import { DashComponentProps } from "../types";
import { ConfigProvider as AntConfigProvider, theme } from "antd";
import { omit } from "ramda";

type Size = "small" | "middle" | "large" | number;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Set common properties for Input component
     */
    input?: { autoComplete?: string };
    /**
     * Set sizing in Space component
     */
    space?: { size?: Size };
    /**
     * Set component specific design tokens
     */
    components?: { [token: string]: { [token: string]: string } };
    /**
     * Set global design tokens
     */
    token?: { [token: string]: string };
    /**
     * Create a dark theming for all child components
     */
    use_dark_theme?: boolean;
    /**
     * Create a dark theming for all child components
     */
    use_compact?: boolean;
} & DashComponentProps;

/**
 * Set components spacing.
 */
const ConfigProvider = (props: Props) => {
    const {
        children,
        token,
        components,
        use_dark_theme: useDarkTheme,
        use_compact: useCompact,
        ...otherProps
    } = props;

    const themeConfig = useMemo(() => {
        const algorithm = useDarkTheme
            ? [theme.darkAlgorithm]
            : [theme.defaultAlgorithm];
        if (useCompact) algorithm.push(theme.compactAlgorithm);
        return { algorithm, token, components };
    }, [token, components, useDarkTheme, useCompact]);

    return (
        <AntConfigProvider
            theme={themeConfig}
            {...omit(["setProps"], otherProps)}
        >
            {children}
        </AntConfigProvider>
    );
};

ConfigProvider.defaultProps = {};

export default ConfigProvider;
