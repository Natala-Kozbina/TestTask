import uuidV4 from 'uuid/v4';

export const FAKE_CONTACTS = [
  {
    id: uuidV4(),
    name: 'John Dou',
    age: '22',
    phone: '1234567890',
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'Random',
    apt: '4',
  }, {
    id: uuidV4(),
    name: 'Alice Cooper',
    age: '44',
    phone: '1234567891',
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'Random',
    apt: '1',
  }, {
    id: uuidV4(),
    name: 'Heather K. Smith',
    age: '33',
    phone: '1234567892',
    country: 'Ukraine',
    city: 'Dnipro',
    street: '4351 Goff Avenue',
    apt: '1',
  }, {
    id: uuidV4(),
    name: 'Kathryn N. Amaral',
    age: '11',
    phone: '1234567893',
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'Berkley',
    apt: '1',
  },
];

export const FAKE_CALLS = [
  {
    id: uuidV4(),
    started: '1318781876406',
    duration: '2 minutes',
    recipientName: 'James Dou',
    callerName: 'John Dou',
  }, {
    id: uuidV4(),
    started: '1418781276406',
    duration: '2 minutes',
    recipientName: 'James Dou',
    callerName: 'John Dou',
  }, {
    id: uuidV4(),
    started: '1398481876406',
    duration: '5 minutes',
    recipientName: 'James Dou',
    callerName: 'John Dou',
  },
];
