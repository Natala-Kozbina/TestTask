import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Controls = ({ editLabel, deleteLabel, edit, remove, className, isVisible }) => {
  return (
    <div className={className}>
      { isVisible &&
        <div>
          <RaisedButton
            label={editLabel}
            primary
            onTouchTap={edit}
          />
          <RaisedButton
            label={deleteLabel}
            secondary
            onTouchTap={remove}
          />
        </div>
      }
    </div>
  );
};

Controls.propTypes = {
  editLabel: PropTypes.string.isRequired,
  deleteLabel: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Styled(Controls)`
  height: 30px;
  margin-top: 10px;
`;
