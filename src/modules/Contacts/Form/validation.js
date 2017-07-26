const validate = (values) => {
  const errors = {};
  const requiredFields = ['name', 'age', 'country', 'city', 'street', 'apt', 'phone'];
  if (values.phone && !/^(0|[1-9][0-9]{9})$/i.test((values.phone))) {
    errors.phone = 'Invalid phone number, must be 10 digits';
  }

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default validate;
