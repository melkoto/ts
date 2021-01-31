import { User } from './models/User';

const user = new User({ name: 'Movsar', age: 31 });

user.events.on('click', () => {
  console.log('click');
});

user.events.trigger('click');
