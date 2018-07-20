import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = props => {
    return (
        <div className="slds-form-element">
            <div className="slds-form-element__control">
                <span className="slds-checkbox">
                    <input
                        type="checkbox"
                        name="options"
                        id={props.id}
                        value="on"
                        onChange={props.handleChange}
                    />
                    <label className="slds-checkbox__label" htmlFor={props.id}>
                        <span className="slds-checkbox_faux" />
                        <span className="slds-form-element__label">{props.label}</span>
                    </label>
                </span>
            </div>
        </div>
    );
};

CheckBox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    handleChange: PropTypes.func
};

export default CheckBox;
