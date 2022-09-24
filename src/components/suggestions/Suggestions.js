import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/userActions';
import { User } from '../user/User';

const Suggestions = () => {
  const { users, loading } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const isFollowing = (userId) =>
    user.following.some((currUser) => currUser._id === userId);

  const handleFollowUser = (userId) => {
    isFollowing(userId)
      ? dispatch(unfollowUser(userId))
      : dispatch(followUser(userId));
  };

  return (
    <div className='bg-white rounded-3 p-1'>
      <h2 className='fs-6 text-center text-capitalize my-3'>who to follow</h2>
      <div>
        {!loading &&
          users &&
          users.map((user) => (
            <div
              key={user._id}
              className='d-flex flex-wrap align-items-center justify-content-between'
            >
              <User user={user} className='p-2' />
              <Button
                variant='outline-primary'
                size='sm'
                onClick={() => handleFollowUser(user._id)}
                disabled={loading}
              >
                {isFollowing(user._id) ? 'Unfollow' : 'Follow'}
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export { Suggestions };
