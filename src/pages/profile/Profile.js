import { Button, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { Avatar } from '../../components/avatar/Avatar';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const { firstName, lastName, username, profileImage, bio, websiteUrl } =
    userInfo;

  return (
    <>
      <div className='d-flex mb-3 bg-white p-3 rounded-3'>
        <Avatar src={profileImage} size='xl' />

        <div className='flex-grow-1 ms-4'>
          <div className='d-flex align-items-center justify-content-between mb-2'>
            <div>
              <h3 className='mb-0 text-capitalize'>
                {firstName} {lastName}
              </h3>
              <p className='text-secondary mb-0'>@{username}</p>
            </div>
            <Button variant='primary' size='sm'>
              Edit Profile
            </Button>
          </div>

          <div>
            <p>{bio}</p>
            <p>
              <i className='fa-solid fa-link me-2'></i>
              <a
                href={websiteUrl}
                className='text-decoration-none'
                target='_blank'
                rel='noreferrer'
              >
                {websiteUrl}
              </a>
            </p>
            <p>
              <span className='me-3'>
                <b>5</b> Posts
              </span>
              <span className='me-3'>
                <b>0</b> Followers
              </span>
              <span className='me-3'>
                <b>0</b> Following
              </span>
            </p>
          </div>
        </div>
      </div>

      <Nav className='d-flex flex-row justify-content-around mb-3'>
        <NavLink to='/profile' end className='mb-2 nav-link'>
          <span>Posts</span>
        </NavLink>
        <NavLink to='/profile/followers' className='mb-2 nav-link'>
          <span>Followers</span>
        </NavLink>
        <NavLink to='/profile/following' className='mb-2 nav-link'>
          <span>Following</span>
        </NavLink>
      </Nav>

      <Outlet />
    </>
  );
};

export { Profile };
