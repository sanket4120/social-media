import { Post } from '../post/Post';

const Posts = ({ posts }) => {
  return (
    <section aria-label='posts' className='posts border-top'>
      {posts ? (
        posts?.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p className='fs-5 text-center py-5'>No posts yet</p>
      )}
    </section>
  );
};

export { Posts };
