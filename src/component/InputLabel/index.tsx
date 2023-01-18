import React from 'react';
import {InputLabelType} from './types';
import {InputLabel} from "@mui/material";

const inputLabelComponent: React.FC<InputLabelType> = (props) => {
    const InputLabelStyle = {
        overflow: "visible",
        textOverflow: "clip",
        whiteSpate: "wrap",
    }

    const markStyle = {
        color: "red",
        marginLeft: "3px",
        transform: "scale(1.3)",
        display: "inline-block"
    }

    return(
        <InputLabel shrink htmlFor={props.id ?? props.label} sx={InputLabelStyle}>
            {props.label}{props.required && (<span style={markStyle}>*</span>)}
        </InputLabel>
    )
}

export default inputLabelComponent;