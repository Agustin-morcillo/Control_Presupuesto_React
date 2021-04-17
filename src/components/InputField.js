import React from 'react'
import PropTypes from 'prop-types';
import Error from "./Error"

export default function InputField({divClass,label,type,name,className,placeholder,onChange,value,error}) {
    return (
        <div className={divClass}>
            {label && <label htmlFor="">{label}</label>}
            <input 
                type={type}
                name={name}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {error && <Error message={error}/>}
        </div>
    )
}

InputField.propTypes = {
    divClass: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
  };
