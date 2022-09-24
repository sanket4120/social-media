import { useSelector } from 'react-redux';
import { Posts } from '../../components/posts/Posts';
import { Loader } from '../../components/loader/Loader';
import { Search } from '../../components/search/Search';

const Explore = () => {
  const { posts, loading, error } = useSelector((state) => state.posts);

  return (
    <>
      {loading && <Loader />}
      <Search className='p-3' />
      {!loading && posts && <Posts posts={posts} />}
      {!loading && !error && !posts.length && (
        <p className='fs-5 text-center my-5'>No posts yet</p>
      )}
    </>
  );
};

export { Explore };
