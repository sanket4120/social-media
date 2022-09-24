import { v4 as uuid } from 'uuid';
import { Link, NavLink } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions';

const Navbar = () => {
  const { user } = useSelector((state) => state.user);

  const navlinks = [
    {
      id: uuid(),
      icon: <i className='fa-solid fa-house '></i>,
      title: 'Feed',
      path: '/',
    },
    {
      id: uuid(),
      icon: <i className='fa-regular fa-hashtag '></i>,
      title: 'Explore',
      path: '/explore',
    },
    {
      id: uuid(),
      icon: <i className='fa-regular fa-bookmark '></i>,
      title: 'Bookmark',
      path: '/bookmarks',
    },
    {
      id: uuid(),
      icon: <i className='fa-regular fa-user'></i>,
      title: 'Profile',
      path: `/profile/${user.username}`,
    },
  ];
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Nav className='bg-white p-2 rounded-3'>
      {navlinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className='mb-2 nav-link rounded-pill'
        >
          {link.icon}
          <span className='navlink-title ms-2'>{link.title}</span>
        </NavLink>
      ))}

      <Link
        to='/'
        variant='primary'
        className='btn btn-primary mb-2 d-none d-md-block'
      >
        Add Post
      </Link>

      <Button variant='outline-danger d-none d-md-block' onClick={handleLogout}>
        <i className='fa-solid fa-arrow-right-from-bracket me-2'></i> Logout
      </Button>
    </Nav>
  );
};

export { Navbar };
