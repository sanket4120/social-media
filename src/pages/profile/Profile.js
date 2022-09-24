import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, useParams } from 'react-router-dom';
import { getUserDetails } from '../../actions';
import { useEffect } from 'react';
import { Loader } from '../../components/loader/Loader';
import { UserBanner } from '../../components/profile/UserBanner';
import { Nav } from 'react-bootstrap';

const Profile = () => {
  const { user, loading } = useSelector((state) => state.userDetails);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    params?.username && dispatch(getUserDetails(params.username));
  }, [params.username, dispatch]);

  return (
    <>
      {loading && <Loader />}
      {!loading && user && (
        <>
          <UserBanner />

          <Nav className='d-flex flex-row justify-content-around'>
            <NavLink
              to={`/profile/${user.username}`}
              end
              className='mb-2 nav-link'
            >
              <span>Posts</span>
            </NavLink>
            <NavLink
              to={`/profile/${user.username}/followers`}
              className='mb-2 nav-link'
            >
              <span>Followers</span>
            </NavLink>
            <NavLink
              to={`/profile/${user.username}/following`}
              className='mb-2 nav-link'
            >
              <span>Following</span>
            </NavLink>
          </Nav>

          <Outlet />
        </>
      )}
    </>
  );
};

export { Profile };
