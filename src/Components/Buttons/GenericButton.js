import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const GenericButton = ({ handleClick, label, disabled }) => {
  return (
    <div onClick={handleClick}>
      <RaisedButton
        label={label}
        primary
        disabled={disabled}
      />
    </div>
  );
};

GenericButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

GenericButton.defaultProps = {
  label: null,
  disabled: false,
  handleClick() {},
};


export default GenericButton;
