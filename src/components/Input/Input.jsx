import React from 'react';
import styleInput from "../Input/Input.module.scss"
function Input(props) {
    return (
        <>
            <input className={styleInput.input__newCategory} type="text"/>
        </>
    );
}

export default Input;