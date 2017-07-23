import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({ children, className }) => {
  return (
    <div className={className}>{children}</div>
  );
};

Header.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Styled(Header)`
  background-color: goldenrod;
  height: 120px;
  width: 560px;
  padding: 20px;
    div:first-child {
      text-align: center;
      font-size: 20px;
      height: 50px;
      font-weight: 600;
    }
`;

