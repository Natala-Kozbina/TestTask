import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';

import Contact from './Components/Contact';
import ContentContainer from '../../Components/Content/ContentContainer';
import ContentHeader from '../../Components/Content/ContentHeader';
import List from '../../Components/List/List';

import { selectContact, fetchContacts, deleteContact } from './ContactsActions';
import { getContacts, getSelectedContactId } from './ContactsReducer';
import { openModal } from '../Modal/ModalActions';

const mapStateToProps = state => ({
  contacts: getContacts(state),
  selectedContactId: getSelectedContactId(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
  select: id => dispatch(selectContact(id)),
  remove: id => dispatch(deleteContact(id)),
  openCreateEditDialog: () => dispatch(openModal()),
  goToCreateState: () => dispatch(push('/create')),
  goToEditState: id => dispatch(push(`/edit/${id}`)),
});


@connect(mapStateToProps, mapDispatchToProps)
class ContactsPage extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
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
    openCreateEditDialog: PropTypes.func.isRequired,
    goToCreateState: PropTypes.func.isRequired,
    goToEditState: PropTypes.func.isRequired,
  };

  static defaultProps = {
    contacts: [],
    selectedContactId: null,
    fetchContacts() {},
    remove() {},
    select() {},
    openCreateEditDialog() {},
    goToEditState() {},
  };

  componentWillMount() {
    this.props.fetchContacts();
  }

  goToCreateState = () => {
    this.props.goToCreateState();
    this.props.openCreateEditDialog();
  };

  render() {
    const { contacts, select, goToEditState, remove, selectedContactId, openCreateEditDialog } = this.props;

    return (
      <ContentContainer>
        <ContentHeader>
          <div>Contacts</div>
          <RaisedButton
            label="Add Contact"
            onTouchTap={this.goToCreateState}
            primary
          />
        </ContentHeader>
        {contacts.length
          ? <List>
            {contacts.map(c => (
              <Contact
                key={c.id}
                goToEditState={goToEditState}
                removeContact={remove}
                select={select}
                isSelected={c.id === selectedContactId}
                openCreateEditDialog={openCreateEditDialog}
                {...c}
              />
            ))}
          </List>
          : <div>There Are No contacts</div>
        }
      </ContentContainer>
    );
  }
}

export default ContactsPage;
