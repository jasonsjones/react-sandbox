import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    large: {
        height: '2.8rem'
    }
};

const TextInput = props => {
    let classList = `slds-form-element ${props.errorMessage ? 'slds-has-error' : ''}`;
    return (
        <div className={classList}>
            <label className="slds-form-element__label" htmlFor={props.name}>
                {props.label}
            </label>
            <div className="slds-form-element__control">
                <input
                    type={props.type}
                    id={props.name}
                    name={props.name}
                    value={props.value}
                    onChange={props.handleChange}
                    className="slds-input"
                    style={styles[props.size]}
                    placeholder={props.placeholder}
                />
            </div>
            {props.errorMessage && (
                <div id="error-message" className="slds-form-element__help">
                    {props.errorMessage}
                </div>
            )}
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
    errorMessage: PropTypes.string,
    handleChange: PropTypes.func
};

export default TextInput;
