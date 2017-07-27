import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../../../Components/List/ListItem';
import Controls from '../../../../Components/Controls/Controls';

const Contact = (props) => {
  const {
    id, openEditForm, name, age,
    country, city, phone,
    street, apt, isSelected,
    select, removeContact,
  } = props;

  const handleClick = () => select(id);
  const remove = () => removeContact(id);
  const edit = () => openEditForm(id);
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
  openEditForm: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
};

Contact.defaultProps = {
  isSelected: false,
  select() {},
  openEditForm() {},
  removeContact() {},
};

export default Contact;

