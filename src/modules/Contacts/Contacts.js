import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Paginator from 'react-redux-paginator';

import AddButton from '../../Components/Buttons/GenericButton';
import Contact from './Components/Contact';
import ContentHeader from '../../Components/Content/ContentHeader';
import List from '../../Components/List/List';

import { selectContact, fetchContacts, deleteContact } from './ContactsActions';
import { getContacts, getSelectedContactId } from './ContactsReducer';

const mapStateToProps = state => ({
  paginatorItems: getContacts(state),
  selectedContactId: getSelectedContactId(state),
});

const mapDispatchToProps = {
  fetchContacts: () => fetchContacts(),
  select: id => selectContact(id),
  remove: id => deleteContact(id),
  openCreateForm: () => push('/create'),
  openEditForm: id => push(`/edit/${id}`),
};

@connect(mapStateToProps, mapDispatchToProps)
@Paginator({
  name: 'Contacts',
  collectionName: 'contacts',
  itemsPerPage: 6,
  isLooped: false,
  shouldRenderIfEmpty: true,
  initialPage: 1,
})
class ContactsPage extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        phone: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        apt: PropTypes.string.isRequired,
      }),
    ),
    selectedContactId: PropTypes.string,
    select: PropTypes.func.isRequired,
    fetchContacts: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    openCreateForm: PropTypes.func.isRequired,
    openEditForm: PropTypes.func.isRequired,
    paginator: PropTypes.object,
  };

  static defaultProps = {
    contacts: [],
    selectedContactId: null,
    fetchContacts() {},
    remove() {},
    select() {},
    openEditForm() {},
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  openCreateForm = () => {
    this.props.openCreateForm();
  };

  render() {
    const { contacts, select, openEditForm, remove, selectedContactId, paginator } = this.props;
    return (
      <div>
        <ContentHeader>
          <div>Contacts</div>
          <AddButton
            label="Add Contact"
            handleClick={this.openCreateForm}
          />
        </ContentHeader>
        {contacts.length
          ? <List paginator={paginator}>
            {contacts.map(c => (
              <Contact
                key={c.id}
                openEditForm={openEditForm.bind(null, c.id)}
                removeContact={remove}
                select={select}
                isSelected={c.id === selectedContactId}
                {...c}
              />
            ))}
          </List>
          : <div>There Are No contacts</div>
        }
      </div>
    );
  }
}

export default ContactsPage;
