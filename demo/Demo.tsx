import React, { useState } from "react";
import { Button } from "../src/ts";

const StateWrapper = ({ tag: Tag, ...otherProps }) => {
    // helper to mimic setProps functionality
    const [state, setState] = useState(otherProps);
    return (
        <Tag
            setProps={(props) => setState({ ...state, ...props })}
            {...state}
        />
    );
};

const Demo = () => (
    <React.Fragment>
        <p>Hello World</p>
    </React.Fragment>
);

export default Demo;
