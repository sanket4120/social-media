import { useState, useEffect } from 'react';
import { Posts } from '../../components/posts/Posts';
import { CreatePost } from '../../components/create-post/CreatePost';
import { useSelector } from 'react-redux';
import { Loader } from '../../components/loader/Loader';

const Homepage = () => {
  const [feedPosts, setFeedPosts] = useState([]);
  const { posts, loading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (posts) {
      setFeedPosts(
        posts
          ?.filter(
            (post) =>
              post?.username === user?.username ||
              user?.following?.find((ele) => post?.username === ele?.username)
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [posts, user]);

  return (
    <>
      <CreatePost />
      {loading && <Loader />}
      {!loading && feedPosts && <Posts posts={feedPosts} />}
      {!loading && !feedPosts.length && (
        <p className='fs-5 text-center my-5'>
          Follow people to see their posts.
        </p>
      )}
    </>
  );
};

export { Homepage };
