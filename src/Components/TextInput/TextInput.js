import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import TextField from 'material-ui/TextField';

const errorStyle = { color: '#B22222' };

const TextInput = ({ hintText, input, type, meta: { touched, error }, className }) => {
  return (
    <div className={className}>
      <TextField
        {...input}
        type={type}
        hintText={hintText}
        floatingLabelText={hintText}
        errorText={touched && error}
        errorStyle={errorStyle}
      />
    </div>
  );
};

TextInput.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    name: PropTypes.string,
  }),
  hintText: PropTypes.string.isRequired,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.string.bool,
    error: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default Styled(TextInput)`
  height: 70px !important;
  label {
    font-weight: 100;
  }
`;
