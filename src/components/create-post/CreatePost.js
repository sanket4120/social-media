import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Avatar } from '../avatar/Avatar';
import { createPost } from '../../actions';

const CreatePost = () => {
  const [post, setPost] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post));
    setPost('');
  };

  return (
    <div className='d-flex p-3 gap-1'>
      <div>
        <Avatar src='https://res.cloudinary.com/svj/image/upload/v1658063130/7309681_sp13za.jpg' />
      </div>

      <Form className='d-flex flex-column flex-grow-1' onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Control
            as='textarea'
            rows={2}
            placeholder="What's happening?"
            className='border-0 rounded-0'
            value={post}
            onChange={(e) => setPost(e.target.value)}
            autoFocus
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
