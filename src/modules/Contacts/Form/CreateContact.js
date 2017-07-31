import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import GenericButton from '../../../Components/Buttons/GenericButton';
import Modal from '../../../Components/Modal/Modal';
import TextInput from '../../../Components/TextInput/TextInput';
import CloseButton from '../../../Components/Buttons/CloseButton';
import Form from './Styled/Form';
import Header from './Styled/Header';

import { createContact } from '../ContactsActions';
import validate from './validation';


const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  create: payload => createContact(payload),
  closeForm: () => push('/'),
};

@reduxForm({ form: 'createContact', validate })
@connect(mapStateToProps, mapDispatchToProps)
class CreateContact extends Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    create() {},
    reset() {},
    closeForm() {},
    handleSubmit() {},
    pristine: true,
    submitting: false,
  };

  handleSubmit = (data) => {
    this.create(data);
    this.close();
  };

  create = (data) => {
    this.props.create(data);
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
          <div>Create Contact</div>
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
            label="Create Contact"
            disabled={pristine || submitting}
            handleClick={handleSubmit(this.handleSubmit)}
          />
        </Form>
      </Modal>
    );
  }
}

export default CreateContact;

