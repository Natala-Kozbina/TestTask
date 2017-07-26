import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Contacts from '../../modules/Contacts/Contacts/Contacts';
import Calls from '../../modules/Calls/Calls';

injectTapEventPlugin();

const MainPage = ({ className, children }) => (
  <div className={className} >
    <Contacts />
    <Calls />
    {children}
  </div>
);

MainPage.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Styled(MainPage)`
  display: flex;
  justify-content: space-around;
`;
