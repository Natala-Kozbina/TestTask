import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Contacts from '../Contacts/Contacts';
import Calls from '../../modules/Calls/Calls';

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
