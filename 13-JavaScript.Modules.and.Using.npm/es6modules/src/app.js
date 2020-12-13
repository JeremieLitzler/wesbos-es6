import { uniq } from 'lodash';
import { insane } from 'insane';
import { jsonp } from 'jsonp';
import { apiKey as key } from './config';
import User, { createURL, gravatar } from './user';

const jeremie = new User(
  'Jérémie Litzler',
  'jeremiel@email.com',
  'madebyjeremie.fr',
);
console.log(jeremie);
console.log(createURL(jeremie.name));
console.log(gravatar(jeremie.email));
