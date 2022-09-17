import { Card } from 'react-bootstrap';
import { Avatar } from '../../avatar/Avatar';
import './post.css';

const Post = () => {
  return (
    <Card className='bg-white rounded-3 border-0 mb-3'>
      <Card.Header className='d-flex align-items-center justify-content-between border-bottom-0'>
        <div className='d-flex align-items-center'>
          <Avatar src='https://res.cloudinary.com/svj/image/upload/v1658063130/7309681_sp13za.jpg' />
          <p className='mb-0 ms-3 d-flex flex-column'>
            <span className='fw-bold'>John Doe</span>
            <span className='text-secondary'>@johndoe . July 13</span>
          </p>
        </div>

        <i className='fa-solid fa-ellipsis icon-hover-circle'></i>
      </Card.Header>

      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Footer className='border-top-0'>
        <div className='d-flex justify-content-between'>
          <ul className='list-unstyled mb-0 d-flex gap-3'>
            <li title='like'>
              <i className='fa-regular fa-thumbs-up icon-hover-circle'></i> 20
            </li>
            <li title='comment'>
              <i className='fa-regular fa-message icon-hover-circle'></i> 2
            </li>
          </ul>
          <ul className='list-unstyled mb-0'>
            <li title='bookmark'>
              <i className='fa-regular fa-bookmark icon-hover-circle'></i>
            </li>
          </ul>
        </div>
      </Card.Footer>
    </Card>
  );
};

export { Post };
