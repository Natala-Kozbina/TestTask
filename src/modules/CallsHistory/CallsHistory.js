import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import CallHistory from './Components/CallHistory';

import ContentContainer from '../../Components/Content/ContentContainer';
import ContentHeader from '../../Components/Content/ContentHeader';
import List from '../../Components/List/List';

import { fetchCallsHistory } from './CallsHistoryActions';
import { getRelatedCallsHistory } from './CallsHistoryReducer';
import { getSelectedContact } from '../Contacts/ContactsReducer';

const mapStateToProps = state => ({
  calls: getRelatedCallsHistory(state),
  selectedContact: getSelectedContact(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCalls: id => dispatch(fetchCallsHistory(id)),
});

@connect(mapStateToProps, mapDispatchToProps)
class CallsHistory extends Component {
  static propTypes = {
    calls: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        started: PropTypes.string.isRequired,
        recipientName: PropTypes.string.isRequired,
        callerName: PropTypes.string.isRequired,
      }),
    ),
    selectedContact: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
    fetchCalls: PropTypes.func.isRequired,
  };

  static defaultProps = {
    calls: [],
    selectedContact: { id: null },
    fetchCalls() {},
  };

  fetchCallsHistory = () => {
    const { fetchCalls, selectedContact: { id } } = this.props;
    fetchCalls(id);
  };

  render() {
    const { calls, selectedContact } = this.props;
    const title = selectedContact.id
      ? `Call history of ${selectedContact.name}`
      : 'Please select contact to view history of calls';

    return (
      <ContentContainer>
        <ContentHeader>
          <div>{title}</div>
          <RaisedButton
            label="Fetch Contact history"
            onTouchTap={this.fetchCallsHistory}
            disabled={!selectedContact.id}
            primary
          />
        </ContentHeader>
        {calls.length ?
          <List>
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
      </ContentContainer>
    );
  }
}

export default CallsHistory;
