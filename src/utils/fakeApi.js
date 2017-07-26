import faker from 'faker';

const contactsQuantity = 15;
const callsPerContact = 20;
const FAKE_CONTACTS = [];
const FAKE_CALLS = [];

for (let i = 1; i <= contactsQuantity; i++) {
  const fakeUser = {
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    phone: Number(String(Math.random() * 10000000000).split('.')[0]),
  };

  FAKE_CONTACTS.push({
    id: String(i),
    name: fakeUser.name,
    age: Number(String(Math.random() * 100).split('.')[0]),
    phone: fakeUser.phone,
    country: faker.fake('{{address.county}}'),
    city: faker.fake('{{address.city}}'),
    street: faker.fake('{{address.streetName}}'),
    apt: 'some apt',
  });
  for (let j = 1; j <= callsPerContact; j++) {
    FAKE_CALLS.push({
      started: faker.fake('{{date.future}}'),
      finished: faker.fake('{{date.past}}'),
      caller: {
        name: fakeUser.name,
        phone: fakeUser.phone,
        id: String(j),
      },
      recipient: {
        name: 'Timothy Dalton',
        phone: Number(String(Math.random() * 10000000000).split('.')[0]),
        id: String(i),
      },
      id: String(j),
    });
  }
}

const fakesRoutes = [
  {
    url: 'calls',
    methods: ['get'],
  },
  {
    url: 'contacts',
    methods: ['get', 'post', 'put', 'delete'],
  },
];


export const isFake = (endpoint, method) => {
  let ss;
  fakesRoutes.forEach((f) => {
    const url = endpoint.split('/')[0];
    const routeMatched = f.url === url;
    const methodMatched = f.methods.includes(method);

    ss = routeMatched && methodMatched;
  });
  return ss;
};

export const getFakeResponse = (endpoint, method, body) =>{
  const url = endpoint.split('/')[0];
  const id = endpoint.split('/')[1];
  const response = {
    contacts: {
      get: FAKE_CONTACTS,
      delete: { id },
      update: { ...body, id },
      post: { ...body, id: faker.random.uuid() },
    },
    calls: {
      get: FAKE_CONTACTS,
    },
  };

  return response[url][method];
};

