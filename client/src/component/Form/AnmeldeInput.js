import React from "react";
import "./../../main.sass";

function AnmeldeInput({
    title,
    name,
    id,
    password,
    value,
    onchange

}) {
    return (
        <>
            <div className="input-wrapper">
                <input
                    name={name}
                    required
                    type={password ? 'password' : 'text'}
                    id={id}
                    value={value}
                    onChange={onchange}
                ></input>
                <label>{title}</label>
            </div>

        </>
    );
}

export default AnmeldeInput;
