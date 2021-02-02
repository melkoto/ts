import { User } from './models/User';

const user = new User({ id: 3, name: 'Alina', age: 28 });

user.on('save', () => console.log(user));

user.save();
