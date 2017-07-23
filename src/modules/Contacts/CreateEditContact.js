import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Modal from '../../Components/Modal/Modal';
import TextInput from '../../Components/TextInput/TextInput';
import CloseButton from '../../Components/Buttons/CloseButton';
import { createContact, editContact } from './ContactsActions';
import { getSelectedContact } from './ContactsReducer';

const Form = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = Styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const validate = (values) => {
  const errors = {};
  const requiredFields = ['name', 'age', 'country', 'city', 'street', 'apt', 'phone'];
  if (values.phone && !/^(0|[1-9][0-9]{9})$/i.test((values.phone))) {
    errors.phone = 'Invalid phone number, must be 10 digits';
  }

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const mapDispatchToProps = (dispatch) => {
  return {
    create: payload => dispatch(createContact(payload)),
    edit: payload => dispatch(editContact(payload)),
    goToIndexState: () => dispatch(push('/')),
    initializeForm: data => dispatch(initialize('createEditContact', data)),
  };
};

const mapStateToProps = (state) => {
  return {
    initialValues: getSelectedContact(state),
  };
};

@reduxForm({ form: 'createEditContact', validate })
@connect(mapStateToProps, mapDispatchToProps)
class CreateEditContact extends Component {
  static propTypes = {
    initialValues: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      age: PropTypes.number,
      phone: PropTypes.number,
      country: PropTypes.string,
      city: PropTypes.string,
      street: PropTypes.string,
      apt: PropTypes.string,
    }),
    params: PropTypes.shape({
      contactId: PropTypes.string,
    }),
    initializeForm: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    goToIndexState: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    initialValues: null,
    params: {},
    initializeForm() {},
    create() {},
    edit() {},
    reset() {},
    goToIndexState() {},
    handleSubmit() {},
    pristine: true,
    submitting: false,
  };

  componentWillMount() {
    const { initialValues, initializeForm, params: { contactId } } = this.props;
    if (contactId) {
      initializeForm(initialValues);
    }
  }

  handleSubmit = (data) => {
    const action = this.props.params.contactId ? 'edit' : 'create';
    this[action](data);
    this.clearForm();
  };

  create = (data) => {
    this.props.create(data);
  };

  edit = (data) => {
    const { initialValues: { id }, edit } = this.props;
    edit({ ...data, id });
  };

  clearForm = () => {
    const { reset, goToIndexState } = this.props;
    reset();
    goToIndexState();
  };

  render() {
    const { handleSubmit, pristine, submitting, params: { contactId } } = this.props;
    return (
      <Modal close={this.clearForm}>
        <Header>
          <div>{contactId ? 'Edit contact' : 'Create Contact'}</div>
          <CloseButton handleClick={this.clearForm} />
        </Header>
        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field name="name" type="text" hintText="Name" component={TextInput} />
          <Field name="age" type="number" hintText="Age" component={TextInput} />
          <Field name="phone" type="text" hintText="Phone" component={TextInput} />
          <Field name="country" type="text" hintText="Country" component={TextInput} />
          <Field name="city" type="text" hintText="City" component={TextInput} />
          <Field name="street" type="text" hintText="Street" component={TextInput} />
          <Field name="apt" type="text" hintText="Apt" component={TextInput} />
          <RaisedButton
            label="SUBMIT CHANGES"
            primary
            disabled={pristine || submitting}
            onTouchTap={handleSubmit(this.handleSubmit)}
          />
        </Form>
      </Modal>
    );
  }
}

export default CreateEditContact;

