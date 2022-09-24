import { useSelector } from 'react-redux';
import { User } from '../user/User';
import { Loader } from '../loader/Loader';

const Followers = () => {
  const {
    user: { followers },
    loading,
    error,
  } = useSelector((state) => state.userDetails);

  return (
    <>
      {loading && <Loader />}
      {!loading && !error && followers.length ? (
        followers.map((user) => (
          <User key={user._id} user={user} className='p-2' />
        ))
      ) : (
        <p className='text-center my-5 fs-5'>No user found.</p>
      )}
    </>
  );
};

export { Followers };
