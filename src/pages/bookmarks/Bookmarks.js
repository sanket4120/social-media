import { useSelector } from 'react-redux';
import { Posts } from '../../components/posts/Posts';

const Bookmarks = () => {
  const { error, bookmarks } = useSelector((state) => state.bookmarks);

  return (
    <>
      {!error && bookmarks.length ? (
        <Posts posts={bookmarks} />
      ) : (
        <p className='fs-5 text-center py-5'>No posts yet</p>
      )}
    </>
  );
};

export { Bookmarks };
