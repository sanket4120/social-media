import { useSelector } from 'react-redux';
import { Posts } from '../posts/Posts';

const UserPosts = () => {
  const {
    user: { posts },
  } = useSelector((state) => state.userDetails);
  return <Posts posts={posts} />;
};

export { UserPosts };
