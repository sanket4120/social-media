import { Button, Form } from 'react-bootstrap';
import { Avatar } from '../avatar/Avatar';

const CreatePost = () => {
  return (
    <div className='bg-white rounded-3 d-flex p-3 gap-1'>
      <Avatar src='https://res.cloudinary.com/svj/image/upload/v1658063130/7309681_sp13za.jpg' />
      <Form className='d-flex flex-column flex-grow-1'>
        <Form.Group className='mb-3'>
          <Form.Control
            as='textarea'
            rows={2}
            placeholder="What's happening?"
            className='border-0'
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          size='sm'
          className='align-self-end'
        >
          Add Post
        </Button>
      </Form>
    </div>
  );
};

export { CreatePost };
