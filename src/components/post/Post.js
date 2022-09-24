import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToBookmarks,
  removeFromBookmarks,
  likePost,
  dislikePost,
} from '../../actions';
import { Avatar } from '../avatar/Avatar';
import './post.css';

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.user);
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const { userDetails, content, likes, comments, _id } = post;
  const { firstName, lastName, username, profileImage } = userDetails;
  const createdAt = new Date(post.createdAt).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
  });
  const dispatch = useDispatch();
  let isBookmarked = false;
  let isLiked = false;

  isBookmarked = bookmarks?.some((currentPost) => currentPost._id === _id);
  isLiked = post?.likes?.likedBy?.some(
    (currentUser) => currentUser._id === user._id
  );

  const toggleBookmark = () => {
    isBookmarked
      ? dispatch(removeFromBookmarks(_id))
      : dispatch(addToBookmarks(_id));
  };

  const toggleLike = () => {
    isLiked ? dispatch(dislikePost(_id)) : dispatch(likePost(_id));
  };

  return (
    <Card className='d-flex flex-row border-0 border-bottom rounded-0 post'>
      <div className='ps-2 pt-2'>
        <Avatar src={profileImage}>
          <span>
            {firstName[0].toUpperCase()}
            {lastName[0].toUpperCase()}
          </span>
        </Avatar>
      </div>

      <div className='flex-grow-1'>
        <Card.Header className='d-flex align-items-center justify-content-between border-bottom-0'>
          <div className='d-flex align-items-center user'>
            <Link to={`/profile/${username}`}>
              <span className='fw-bold text-capitalize d-block'>
                {firstName} {lastName}
              </span>
              <span className='text-secondary'>
                @{username} · {createdAt}
              </span>
            </Link>
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
            <ul className='list-unstyled mb-0 d-flex gap-3 postlinks'>
              <li title={`${isLiked ? 'liked' : 'like'}`} onClick={toggleLike}>
                <i
                  className={`fa-${
                    isLiked ? 'solid' : 'regular'
                  } fa-heart icon-hover-circle`}
                ></i>
                {likes.likeCount}
              </li>
              <li title='comment'>
                <i className='fa-regular fa-message icon-hover-circle'></i>
                {comments.length}
              </li>
            </ul>
            <ul className='list-unstyled mb-0'>
              {isBookmarked ? (
                <li title='bookmarked' onClick={toggleBookmark}>
                  <i className='fa-solid fa-bookmark icon-hover-circle'></i>
                </li>
              ) : (
                <li title='bookmark' onClick={toggleBookmark}>
                  <i className='fa-regular fa-bookmark icon-hover-circle'></i>
                </li>
              )}
            </ul>
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
};

export { Post };
