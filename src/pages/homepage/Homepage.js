import { Post } from '../../components/cards/post/Post';
import { CreatePost } from '../../components/create-post/CreatePost';

const Homepage = () => {
  return (
    <>
      <CreatePost />
      <section aria-label='posts' className='my-3'>
        <Post />
        <Post />
        <Post />
      </section>
    </>
  );
};

export { Homepage };
