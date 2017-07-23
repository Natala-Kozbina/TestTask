import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Contacts from '../src/modules/Contacts/Contacts';
import Calls from '../src/modules/Calls/Calls';

injectTapEventPlugin();

const App = ({ children, className }) => (
  <div className={className} >
    <Contacts />
    <Calls />
    {children}
  </div>
);

App.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Styled(App)`
  display: flex;
  justify-content: space-around;
`;

