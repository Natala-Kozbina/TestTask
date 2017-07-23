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
  className: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

Controls.defaultProps = {
  isVisible: false,
  edit() {},
  remove() {},
};

export default Styled(Controls)`
  height: 30px;
  margin-top: 10px;
  position: relative;
  bottom: 10px;
`;
