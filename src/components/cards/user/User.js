import { Button } from 'react-bootstrap';
import { Avatar } from '../../avatar/Avatar';

const User = () => {
  return (
    <div className='d-flex align-items-center justify-content-between p-2 mb-3 flex-wrap gap-1 bg-white rounded-3'>
      <div className='d-flex align-items-center'>
        <Avatar src='https://res.cloudinary.com/svj/image/upload/v1658063130/7309681_sp13za.jpg' />
        <p className='mb-0 ms-3 d-flex flex-column'>
          <span className='fw-bold'>John Doe</span>
          <span className='text-secondary'>@johndoe</span>
        </p>
      </div>
      <Button variant='primary' size='sm'>
        Follow
      </Button>
    </div>
  );
};

export { User };
