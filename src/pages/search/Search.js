import { Form, Button, InputGroup } from 'react-bootstrap';
import { User } from '../../components/cards/user/User';

const Search = () => {
  return (
    <>
      <Form>
        <InputGroup className='mb-3'>
          <InputGroup.Text className='bg-white'>
            <i class='fa-solid fa-magnifying-glass'></i>
          </InputGroup.Text>
          <Form.Control
            placeholder='Search for people'
            aria-label='Search for people'
          />
        </InputGroup>

        <Button variant='primary' type='submit' className='d-none'>
          Submit
        </Button>
      </Form>

      <User />
      <User />
      <User />
    </>
  );
};

export { Search };
