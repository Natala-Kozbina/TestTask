import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

const style = {
  color: 'red',
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToIndexState: () => dispatch(push('/')),
  };
};

const Error = (props) => {
  const { message, goToIndexState } = props;

  return (
    <Modal close={goToIndexState}>
      <span style={style}>{message}</span>
    </Modal>
  );
};


Error.defaultProps = {
  message: 'Server error',
  goToIndexState() {},
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
  goToIndexState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);

