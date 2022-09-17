import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { validateLogin, validateLoginField } from './validate';
import { login } from '../redux/index';
import { useDispatch, useSelector } from 'react-redux';

const useUserLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errors: {
      username: '',
      password: '',
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, isAuthenticated]);

  const fillTestCredentials = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      username: 'johndoe@gmail.com',
      password: '123456',
      errors: {
        username: '',
        password: '',
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateLogin(formData);

    if (isValid) {
      const { username, password } = formData;
      const loginCredentials = {
        username,
        password,
      };

      dispatch(login(loginCredentials));

      setFormData({
        username: '',
        password: '',
        errors: {
          username: '',
          password: '',
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
    const error = validateLoginField(name, value, formData);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errors: { ...formData.errors, [name]: error },
    }));
  };

  return {
    handleChange,
    showPassword,
    setShowPassword,
    formData,
    loading,
    fillTestCredentials,
    handleSubmit,
  };
};

export { useUserLogin };
