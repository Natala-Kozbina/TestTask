import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const SecondaryButton = ({ handleClick, label, disabled }) => {
  return (
    <div onClick={handleClick}>
      <RaisedButton
        label={label}
        secondary
        disabled={disabled}
      />
    </div>
  );
};

SecondaryButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

SecondaryButton.defaultProps = {
  label: null,
  disabled: false,
  handleClick() {},
};


export default SecondaryButton;
