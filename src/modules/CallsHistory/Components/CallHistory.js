import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ListItem from '../../../Components/List/ListItem';

const CallHistory = ({ started, duration, recipientName, callerName }) => {
  return (
    <ListItem>
      <div>Started: {`${moment(Number(started)).format('YYYY-MM-DD')}`}</div>
      <div>Call duration: {`${duration}`}</div>
      <div>Caller name: {`${callerName}`}</div>
      <div>Recipient Name: {`${recipientName}`}</div>
    </ListItem>
  );
};

CallHistory.propTypes = {
  started: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  recipientName: PropTypes.string.isRequired,
  callerName: PropTypes.string.isRequired,
};

export default CallHistory;

