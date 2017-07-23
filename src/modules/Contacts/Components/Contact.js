import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../../Components/List/ListItem';
import Controls from '../../../Components/Controls/Controls';

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
      onClick={handleClick}
      isSelected={isSelected}
    >
      <div>
        <span>Name: </span>
        <span>{`${name}`}</span>
      </div>
      <div>
        <span>Age: </span>
        <span>{`${age}`}</span>
      </div>
      <div>
        <span>Phone: </span>
        <span>{`${phone}`}</span>
      </div>
      <div>
        <span>Country: </span>
        <span>{`${country}`}</span>
      </div>
      <div>
        <span>City: </span>
        <span>{`${city}`}</span>
      </div>
      <div>
        <span>Street: </span>
        <span>{`${street}`}</span>
      </div>
      <div>
        <span>Apt: </span>
        <span>{`${apt}`}</span>
      </div>
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
  age: PropTypes.number.isRequired,
  phone: PropTypes.number.isRequired,
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

