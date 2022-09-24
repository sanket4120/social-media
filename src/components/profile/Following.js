import { useDispatch, useSelector } from 'react-redux';
import { User } from '../user/User';
import { Loader } from '../loader/Loader';
import { followUser, unfollowUser } from '../../actions/userActions';
import { Button } from 'react-bootstrap';

const Following = () => {
  const { user: currentUser } = useSelector((state) => state.user);
  const { user, loading, error } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  const following =
    user._id === currentUser._id ? currentUser.following : user.following;

  const isFollowing = (userId) =>
    following.some((currUser) => currUser._id === userId);

  const handleFollowUser = (userId) => {
    isFollowing ? dispatch(unfollowUser(userId)) : dispatch(followUser(userId));
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && !error && following.length ? (
        following.map((user) => (
          <div
            key={user._id}
            className='p-2 d-flex align-items-center justify-content-between'
          >
            <User user={user} />
            <Button
              variant='outline-primary'
              size='sm'
              onClick={() => handleFollowUser(user._id)}
              disabled={loading}
            >
              {isFollowing(user._id) ? 'Unfollow' : 'Follow'}
            </Button>
          </div>
        ))
      ) : (
        <p className='text-center my-5 fs-5'>No user found.</p>
      )}
    </>
  );
};

export { Following };
