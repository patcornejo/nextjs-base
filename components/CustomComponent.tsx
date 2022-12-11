import React from 'react';
import {ICustomProps} from "../interfaces/IProps";

const CustomComponent: React.FunctionComponent<ICustomProps> = ({name}) => {
    return(
        <>
            <p>Bienvenido a {name}! Soy un component personalizado.</p>
        </>
    )
}

export default CustomComponent;
