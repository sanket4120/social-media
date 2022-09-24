import { Avatar } from '../avatar/Avatar';
import { Link } from 'react-router-dom';
import './user.css';

const User = ({ user, children, className, ...rest }) => {
  return (
    <>
      <div
        className={`d-flex align-items-center gap-2 bg-white rounded-3 user ${className}`}
        {...rest}
      >
        <Avatar
          size='sm'
          src={user.profileImage}
          className='align-self-start mt-1'
        >
          <span>
            {user.firstName[0].toUpperCase()}
            {user.lastName[0].toUpperCase()}
          </span>
        </Avatar>
        <div>
          <Link
            to={`/profile/${user.username}`}
            className='d-flex flex-column user'
          >
            <span className='fw-bold text-capitalize'>
              {user.firstName} {user.lastName}
            </span>
            <span className='text-secondary'>@{user.username}</span>
          </Link>

          {children}
        </div>
      </div>
    </>
  );
};

export { User };
