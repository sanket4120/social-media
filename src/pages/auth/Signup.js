import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserSignup } from '../../utils/useUserSignup';

const Signup = () => {
  const { formData, handleSubmit, loading, handleChange } = useUserSignup();

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    username,
    errors,
  } = formData;

  return (
    <div className='min-vh-100 d-flex align-items-center'>
      <div className='auth-container rounded-3 p-4 mx-auto w-100 border my-5'>
        <h1 className='text-center mb-3 fs-2'>
          Signup for <span className='text-primary'>Socio</span>
        </h1>
        <Form onSubmit={handleSubmit}>
          <div className='d-md-flex gap-3'>
            <Form.Group className='mb-3'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your first name'
                name='firstName'
                value={firstName}
                onChange={handleChange}
                className={errors.firstName && 'border-danger'}
              />
              <Form.Text className='text-danger'>{errors.firstName}</Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your Last name'
                name='lastName'
                value={lastName}
                onChange={handleChange}
                className={errors.lastName && 'border-danger'}
              />
              <Form.Text className='text-danger'>{errors.lastName}</Form.Text>
            </Form.Group>
          </div>

          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={handleChange}
              className={errors.email && 'border-danger'}
            />
            <Form.Text className='text-danger'>{errors.email}</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
              placeholder='Enter your username e.g. johndoe'
              className={errors.username && 'border-danger'}
            />
            <Form.Text className='text-danger'>{errors.username}</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter your password'
              name='password'
              value={password}
              onChange={handleChange}
              className={errors.password && 'border-danger'}
            />
            <Form.Text className='text-danger'>{errors.password}</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Re-enter your password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword && 'border-danger'}
            />
            <Form.Text className='text-danger'>
              {errors.confirmPassword}
            </Form.Text>
          </Form.Group>

          <Button
            variant='primary'
            type='submit'
            className='w-100 mb-3 rounded-pill'
            disabled={loading}
          >
            {loading ? (
              <i className='fa-solid fa-circle-notch fa-spin'></i>
            ) : (
              'Sign Up'
            )}
          </Button>

          <p className='text-center'>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export { Signup };
