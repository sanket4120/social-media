import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Avatar } from '../avatar/Avatar';
import './post.css';

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.user);
  const { userDetails, content, likes, comments } = post;
  const { firstName, lastName, username, profileImage } = userDetails;
  const createdAt = new Date(post.createdAt).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
  });

  return (
    <Card className='d-flex flex-row border-0 border-bottom rounded-0 post'>
      <div className='ps-2 pt-2'>
        <Avatar src={profileImage} />
      </div>

      <div>
        <Card.Header className='d-flex align-items-center justify-content-between border-bottom-0'>
          <div className='d-flex align-items-center'>
            <p className='m-0 '>
              <span className='fw-bold text-capitalize d-block'>
                {firstName} {lastName}
              </span>
              <span className='text-secondary'>
                @{username} · {createdAt}
              </span>
            </p>
          </div>

          {user._id === userDetails._id && (
            <i className='fa-solid fa-ellipsis icon-hover-circle'></i>
          )}
        </Card.Header>

        <Card.Body className='pt-0 pb-0'>
          <Card.Text>{content}</Card.Text>
        </Card.Body>

        <Card.Footer className='border-top-0'>
          <div className='d-flex justify-content-between'>
            <ul className='list-unstyled mb-0 d-flex gap-3'>
              <li title='like'>
                <i className='fa-regular fa-heart icon-hover-circle'></i>
                {likes.likeCount}
              </li>
              <li title='comment'>
                <i className='fa-regular fa-message icon-hover-circle'></i>
                {comments.length}
              </li>
            </ul>
            <ul className='list-unstyled mb-0'>
              <li title='bookmark'>
                <i className='fa-regular fa-bookmark icon-hover-circle'></i>
              </li>
            </ul>
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
};

export { Post };
