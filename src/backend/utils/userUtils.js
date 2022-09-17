const getUserDetails = (schema, username) => {
  const userDetails = schema.users.findBy({ username }).attrs;
  return userDetails;
};

const getPostWithDetails = (schema, post) => {
  const userDetails = getUserDetails(schema, post.username);
  console.log('User details', userDetails);
  const postWithDetails = { ...post, userDetails: userDetails };
  postWithDetails.comments = post.comments.map((comment) => {
    const userDetails = getUserDetails(schema, comment.username);
    return { ...comment, userDetails: userDetails };
  });
};

export { getPostWithDetails };
