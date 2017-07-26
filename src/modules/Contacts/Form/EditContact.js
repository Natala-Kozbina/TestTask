import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import GenericButton from '../../../Components/Buttons/GenericButton';
import Modal from '../../../Components/Modal/Modal';
import TextInput from '../../../Components/TextInput/TextInput';
import CloseButton from '../../../Components/Buttons/CloseButton';
import Form from './Styled/Form';
import Header from './Styled/Header';

import { createContact, editContact } from '../Contacts/ContactsActions';
import { getContactById } from '../Contacts/ContactsReducer';
import validate from './validation';

const mapStateToProps = (state, { params: { contactId } }) => {
  return {
    initialValues: getContactById(state, contactId),
  };
};

const mapDispatchToProps = {
  create: payload => createContact(payload),
  edit: payload => editContact(payload),
  closeForm: () => push('/'),
  initializeForm: data => initialize('editContact', data),
};
@connect(mapStateToProps, mapDispatchToProps)
@reduxForm({ form: 'editContact', validate })
class EditContact extends Component {
  static propTypes = {
    params: PropTypes.shape({
      contactId: PropTypes.string.isRequired,
    }).isRequired,
    edit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    params: {},
    edit() {},
    reset() {},
    closeForm() {},
    handleSubmit() {},
    pristine: true,
    submitting: false,
  };

  handleSubmit = (data) => {
    this.edit(data);
    this.close();
  };

  edit = (data) => {
    const { params: { contactId }, edit } = this.props;
    edit({ ...data, contactId });
  };

  close = () => {
    const { reset, closeForm } = this.props;
    reset();
    closeForm();
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <Modal close={this.close}>
        <Header>
          <div>Edit contact</div>
          <CloseButton handleClick={this.close} />
        </Header>
        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field name="name" type="text" hintText="Name" component={TextInput} />
          <Field name="age" type="number" hintText="Age" component={TextInput} />
          <Field name="phone" type="text" hintText="Phone" component={TextInput} />
          <Field name="country" type="text" hintText="Country" component={TextInput} />
          <Field name="city" type="text" hintText="City" component={TextInput} />
          <Field name="street" type="text" hintText="Street" component={TextInput} />
          <Field name="apt" type="text" hintText="Apt" component={TextInput} />
          <GenericButton
            label="Edit contact"
            disabled={pristine || submitting}
            handleClick={handleSubmit(this.handleSubmit)}
          />
        </Form>
      </Modal>
    );
  }
}

export default EditContact;

