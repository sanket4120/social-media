import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'john',
    lastName: 'doe',
    email: 'johndoe@gmail.com',
    username: 'johndoe',
    password: '123456',
    profileImage:
      'https://res.cloudinary.com/svj/image/upload/v1658063130/7309681_sp13za.jpg',
    websiteUrl: 'https://github.com/sanket4120',
    bio: 'Learning web development @neogcamp',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'jenny',
    lastName: 'doe',
    email: 'jennydoe@gmail.com',
    username: 'jennydoe',
    password: 'jenny123',
    profileImage:
      'https://res.cloudinary.com/svj/image/upload/v1658063358/7294811_dynu2l.jpg',
    websiteUrl: 'https://github.com/octocat',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Vivaan',
    lastName: 'Singhal',
    email: 'vivaansinghal@gmail.com',
    username: 'vivaansinghal',
    password: 'vivaan123',
    websiteUrl: 'https://github.com/octocat',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    profileImage:
      'https://res.cloudinary.com/svj/image/upload/v1658063130/7309689_orwrck.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Ankita',
    lastName: 'Tambe',
    email: 'ankitatambe@gmail.com',
    username: 'ankitatambe',
    password: 'ankita123',
    profileImage:
      'https://res.cloudinary.com/svj/image/upload/v1658063358/7294793_ef5dak.jpg',
    websiteUrl: 'https://github.com/octocat',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Aaryan',
    lastName: 'Jaiteley',
    username: 'aaryanjaiteley',
    email: 'aaryanjaiteley@gmail.com',
    password: 'aaryan123',
    profileImage:
      'https://res.cloudinary.com/svj/image/upload/v1658063130/7309698_g8tmkp.jpg',
    websiteUrl: 'https://github.com/octocat',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
