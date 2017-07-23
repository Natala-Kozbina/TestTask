import faker from 'faker';

const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export const FAKE_CONTACTS = [];
export const FAKE_CALLS = [];

ids.forEach((id) => {
  const fakeUser = {
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    phone: Number(`${1234567890 + Number(id)}`),
  };

  FAKE_CONTACTS.push({
    id,
    name: fakeUser.name,
    age: 11,
    phone: fakeUser.phone,
    country: faker.fake('{{address.county}}'),
    city: faker.fake('{{address.city}}'),
    street: faker.fake('{{address.streetName}}'),
    apt: 'some apt',
  });
  FAKE_CALLS.push({
    started: faker.fake('{{date.future}}'),
    finished: faker.fake('{{date.past}}'),
    caller: {
      name: fakeUser.name,
      phone: fakeUser.phone,
      id,
    },
    recipient: {
      name: 'Timothy Dalton',
      phone: 1111111111,
      id: '12342',
    },
    id,
  });
});
