import { v4 as uuid } from 'uuid';
import { Response } from 'miragejs';
import { formatDate } from '../utils/authUtils';
const sign = require('jwt-encode');

/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, username, password}
 * */

export const signupHandler = function (schema, request) {
  const { username, password, email, ...rest } = JSON.parse(
    request.requestBody
  );
  try {
    const errors = [];
    // check if username already exists
    if (schema.users.findBy({ username: username })) {
      errors.push('Username already exists');
    }

    if (schema.users.findBy({ email })) {
      errors.push('Email already exists');
    }

    if (errors.length) {
      return new Response(
        422,
        {},
        {
          errors,
        }
      );
    }

    const _id = uuid();

    const newUser = {
      _id,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      username,
      password,
      ...rest,
      followers: [],
      following: [],
      bookmarks: [],
    };
    const createdUser = schema.users.create(newUser);
    const encodedToken = sign(
      { _id, username },
      process.env.REACT_APP_JWT_SECRET
    );
    return new Response(201, {}, { createdUser, encodedToken });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {username, password}
 * */

export const loginHandler = function (schema, request) {
  const { username, password } = JSON.parse(request.requestBody);
  try {
    let foundUser = schema.users.findBy({ username: username });
    if (!foundUser) {
      foundUser = schema.users.findBy({ email: username });
    }
    if (!foundUser) {
      return new Response(
        404,
        {},
        {
          errors: ['The username you entered is not Registered.'],
        }
      );
    }
    if (password === foundUser.password) {
      const encodedToken = sign(
        { _id: foundUser._id, username: foundUser.username },
        process.env.REACT_APP_JWT_SECRET
      );
      return new Response(200, {}, { foundUser, encodedToken });
    }
    return new Response(
      401,
      {},
      {
        errors: ['The credentials you entered are invalid.'],
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
