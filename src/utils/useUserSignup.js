import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { validateSignup, validateSignupField } from './validate';
import { signup } from '../actions';

const useUserSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    },
  });
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from || '/';
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = validateSignup(formData);

    if (isValid) {
      const { firstName, lastName, email, password, username } = formData;
      const userDetails = {
        firstName,
        lastName,
        email,
        password,
        username,
      };

      dispatch(signup(userDetails));

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        errors: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          username: '',
        },
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, ...errors },
      }));
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    const error = validateSignupField(name, value, formData);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errors: { ...formData.errors, [name]: error },
    }));
  };

  return {
    handleChange,
    formData,
    handleSubmit,
    loading,
  };
};

export { useUserSignup };
