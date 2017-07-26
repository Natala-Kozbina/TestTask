import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ListItem from '../../../Components/List/ListItem';

const Call = ({ started, finished, recipient, caller }) => {
  const duration = moment(started).diff(moment(finished), 'minutes');
  return (
    <ListItem>
      <div>
        <span>Started: </span>
        <span>{`${moment(started).format('YYYY-MM-DD')}`}</span></div>
      <div>
        <span>Call duration: </span>
        <span>{`${duration} min`}</span></div>
      <div>
        <span>Caller name: </span>
        <span>{`${caller.name}`}</span></div>
      <div>
        <span>Caller phone: </span>
        <span>{`${caller.phone}`}</span></div>
      <div>
        <span>Recipient name: </span>
        <span>{`${recipient.name}`}</span></div>
      <div>
        <span>Recipient phone: </span>
        <span>{`${recipient.phone}`}</span>
      </div>
    </ListItem>
  );
};

Call.propTypes = {
  started: PropTypes.string.isRequired,
  finished: PropTypes.string.isRequired,
  recipient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
  }),
  caller: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
  }),
};

export default Call;

