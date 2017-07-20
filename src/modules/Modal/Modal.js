import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

import { isModalOpen } from './ModalReducer';
import { closeModal } from './ModalActions';

const mapStateToProps = (state) => {
  return {
    isOpen: isModalOpen(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(closeModal()),
  };
};

const style = {
  width: '350px',
  maxWidth: 'none',
};

const Modal = ({ children, isOpen, close }) => {
  return (
    <Dialog
      modal={false}
      open={isOpen}
      onRequestClose={close}
      contentStyle={style}
    >
      {children}
    </Dialog>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

