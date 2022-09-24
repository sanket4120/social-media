const getUserDetails = (schema, username) => {
  const userDetails = schema.users.findBy({ username }).attrs;
  return userDetails;
};

const getPostWithUserDetails = (schema, post) => {
  const userDetails = getUserDetails(schema, post.username);
  const postWithUserDetails = { ...post, userDetails: userDetails };
  return postWithUserDetails;
};

export { getPostWithUserDetails };
