import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paginator from 'react-redux-paginator';
import CallHistory from './Components/Call';

import ContentHeader from '../../Components/Content/ContentHeader';
import List from '../../Components/List/List';
import GenericButton from '../../Components/Buttons/GenericButton';

import { fetchCallsHistory } from './CallsActions';
import { getRelatedCallsHistory } from './CallsReducer';
import { getSelectedContact, getSelectedContactId } from '../Contacts/Contacts/ContactsReducer';

const mapStateToProps = state => ({
  paginatorItems: getRelatedCallsHistory(state, getSelectedContactId(state)),
  selectedContact: getSelectedContact(state),
  selectedContactId: getSelectedContactId(state),
});

const mapDispatchToProps = {
  fetchCalls: id => fetchCallsHistory(id),
};

@connect(mapStateToProps, mapDispatchToProps)
@Paginator({
  name: 'Calls',
  collectionName: 'calls',
  dynamicNameWith: 'selectedContactId',
  itemsPerPage: 6,
  isLooped: false,
  shouldRenderIfEmpty: true,
  initialPage: 1,
})
class Calls extends Component {
  static propTypes = {
    calls: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        started: PropTypes.string.isRequired,
        finished: PropTypes.string.isRequired,
        recipient: PropTypes.shape({
          name: PropTypes.string.isRequired,
          phone: PropTypes.number.isRequired,
        }).isRequired,
        caller: PropTypes.shape({
          name: PropTypes.string.isRequired,
          phone: PropTypes.number.isRequired,
        }).isRequired,
      }),
    ),
    selectedContact: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
    fetchCalls: PropTypes.func.isRequired,
    paginator: PropTypes.object,
  };

  static defaultProps = {
    calls: [],
    selectedContact: { id: null },
    fetchCalls() {},
  };

  fetchCalls = () => {
    const { fetchCalls, selectedContact: { id } } = this.props;
    fetchCalls(id);
  };

  render() {
    const { calls, selectedContact, paginator } = this.props;
    const title = selectedContact.id
      ? `Call history of ${selectedContact.name}`
      : 'Please select contact to view history of calls';

    return (
      <div>
        <ContentHeader>
          <div>{title}</div>
          <GenericButton
            label="Fetch Contact history"
            handleClick={this.fetchCalls}
            disabled={!selectedContact.id}
          />
        </ContentHeader>
        {calls.length ?
          <List paginator={paginator}>
            {calls.map(c => (
              <CallHistory
                title={title}
                key={c.id}
                {...c}
              />
            ))}
          </List>
          : <div>There are no calls to show</div>
        }
      </div>
    );
  }
}

export default Calls;
