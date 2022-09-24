import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { postId } = useParams();
  return <div>PostDetails</div>;
};

export { PostDetails };
