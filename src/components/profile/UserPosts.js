import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Posts } from '../posts/Posts';

const UserPosts = () => {
  const [feedPosts, setFeedPosts] = useState([]);
  const { posts, loading, error } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (posts) {
      setFeedPosts(
        posts
          .filter((post) => post?.username === user?.username)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [posts, user]);

  return <>{!loading && !error && <Posts posts={feedPosts} />}</>;
};

export { UserPosts };
