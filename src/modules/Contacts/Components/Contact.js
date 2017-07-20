import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from '../../../Components/List/ListItem';
import Controls from '../../../Components/Controls/Controls';

const Address = Styled.ul`
  margin: 0;
  div {
   margin-left: 20px;
  }
`;

const Contact = (props) => {
  const {
    id, name, age,
    country, city, phone,
    street, apt, isSelected,
    select, goToEditState, removeContact,
  } = props;

  const handleClick = () => select(id);
  const edit = () => goToEditState(id);
  const remove = () => removeContact(id);

  return (
    <ListItem
      onTouchTap={handleClick}
      color={isSelected ? 'skyblue !important' : 'initial !important'}
    >
      <div>Name: {`${name}`}</div>
      <div>Age: {`${age}`}</div>
      <div>Phone: {`${phone}`}</div>
      <div>Address:</div>
      <Address>
        <li>Country: {`${country}`}</li>
        <li>City: {`${city}`}</li>
        <li>Street: {`${street}`}</li>
        <li>Apt: {`${apt}`}</li>
      </Address>
      <Controls
        isVisible={isSelected}
        editLabel="Edit"
        deleteLabel="Delete"
        edit={edit}
        remove={remove}
      />
    </ListItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  apt: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  goToEditState: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
};

Contact.defaultProps = {
  isSelected: false,
  select() {},
  goToEditState() {},
  removeContact() {},
};

export default Contact;

