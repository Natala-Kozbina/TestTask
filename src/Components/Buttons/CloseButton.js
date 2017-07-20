import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Close from 'material-ui/svg-icons/content/clear';

const CloseButton = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <FloatingActionButton>
        <Close />
      </FloatingActionButton>
    </div>
  );
};

CloseButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CloseButton;
