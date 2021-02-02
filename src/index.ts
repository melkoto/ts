import { User } from './models/User';

const user = new User({ name: 'Mansur', age: 27 });

console.log(user.get('name'));

user.on('change', () => console.log('change'));
user.trigger('click');

user.set({ name: 'Adam' });
