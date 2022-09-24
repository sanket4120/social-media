import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/userActions';
import { Avatar } from '../avatar/Avatar';

const UserBanner = () => {
  const { user: currentUser, loading } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  const isFollowing = currentUser.following.some(
    (currUser) => currUser._id === user._id
  );

  const handleFollowUser = () => {
    isFollowing
      ? dispatch(unfollowUser(user._id))
      : dispatch(followUser(user._id));
  };

  return (
    <div className='p-3'>
      <div className='d-flex align-items-center justify-content-between mb-3'>
        <Avatar src={user.profileImage} size='xl' />

        {user._id === currentUser._id ? (
          <Button variant='primary' size='sm'>
            Edit Profile
          </Button>
        ) : (
          <Button
            variant='outline-primary'
            size='sm'
            onClick={handleFollowUser}
            disabled={loading}
          >
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Button>
        )}
      </div>

      <h3 className='mb-0 text-capitalize'>
        {user.firstName} {user.lastName}
      </h3>
      <p className='text-secondary'>@{user.username}</p>

      <p>{user.bio}</p>

      <p>
        {user.websiteUrl && (
          <>
            <i className='fa-solid fa-link me-2'></i>
            <a
              href={user.websiteUrl}
              className='text-decoration-none'
              target='_blank'
              rel='noreferrer'
            >
              {user.websiteUrl}
            </a>
          </>
        )}
      </p>

      <p>
        <span className='me-3'>
          <b>{user.posts.length}</b> Posts
        </span>
        <span className='me-3'>
          <b>{user.followers.length}</b> Followers
        </span>
        <span className='me-3'>
          <b>{user.following.length}</b> Following
        </span>
      </p>
    </div>
  );
};

export { UserBanner };
