import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';


const style = { height: '70px' };
const errorStyle = { color: '#B22222' };

const TextInput = ({ hintText, input, type, meta: { touched, error } }) => {
  return (
    <div style={style}>
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
    value: PropTypes.string,
    name: PropTypes.string,
  }),
  hintText: PropTypes.string.isRequired,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.string.bool,
    error: PropTypes.string,
  }),
};

export default TextInput;
