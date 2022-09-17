import { Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserLogin } from '../../utils/useUserLogin';
import './auth.css';

const Login = () => {
  const {
    handleChange,
    showPassword,
    setShowPassword,
    formData,
    loading,
    fillTestCredentials,
    handleSubmit,
  } = useUserLogin();

  const { username, password, errors } = formData;

  return (
    <div className='min-vh-100 d-flex align-items-center'>
      <div className='auth-container bg-white rounded-2 p-4 mx-auto w-100 shadow-sm border'>
        <h1 className='text-center mb-3 fs-2'>
          Login to <span className='text-primary'>Socio</span>
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your username or email'
              name='username'
              value={username}
              onChange={handleChange}
              className={errors.username ? 'border-danger' : null}
            />
            <Form.Text className='text-danger'>{errors.username}</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <InputGroup
              className={`border rounded-2 ${
                errors.password ? 'border-danger' : null
              } `}
            >
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                name='password'
                value={password}
                onChange={handleChange}
                className='border-0 '
              />
              <InputGroup.Text className='bg-white border-0'>
                <i
                  className={`fa-regular ${
                    showPassword ? 'fa-eye' : 'fa-eye-slash'
                  }`}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                ></i>
              </InputGroup.Text>
            </InputGroup>
            <Form.Text className='text-danger'>{errors.password}</Form.Text>
          </Form.Group>

          <Button
            variant='primary'
            type='submit'
            className='w-100 mb-3'
            disabled={loading}
          >
            {loading ? (
              <i className='fa-solid fa-circle-notch fa-spin'></i>
            ) : (
              'Login'
            )}
          </Button>

          <p
            className='text-primary text-decoration-underline mb-3 cursor-pointer text-center'
            disabled={loading}
            onClick={fillTestCredentials}
          >
            Use test credentials
          </p>

          <p className='text-center'>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export { Login };
