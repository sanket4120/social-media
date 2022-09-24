import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '../avatar/Avatar';
import { createPost } from '../../actions';

const CreatePost = () => {
  const [post, setPost] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post));
    setPost('');
  };

  return (
    <div className='d-flex p-3 gap-1'>
      <div>
        <Avatar src={user.profileImage}>
          {user.firstName[0].toUpperCase()}
          {user.lastName[0].toUpperCase()}
        </Avatar>
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
