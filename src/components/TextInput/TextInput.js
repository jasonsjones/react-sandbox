import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    large: {
        height: '2.8rem'
    }
};

const TextInput = (props) => {
    return (
        <div className="slds-form-element">
            <label className="slds-form-element__label" htmlFor={props.name}>{props.label}</label>
            <div className="slds-form-element__control">
                <input type={props.type} id={props.name} name={props.name} value={props.value}
                    onChange={props.handleChange} className="slds-input" style={styles[props.size]}
                    placeholder={props.placeholder} />
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func
};

export default TextInput;