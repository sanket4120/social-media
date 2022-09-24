import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/Homepage';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { Container } from 'react-bootstrap';
import { PrivateRoutes } from './components/private-routes/PrivateRoutes';
import { Explore } from './pages/explore/Explore';
import { Bookmarks } from './pages/bookmarks/Bookmarks';
import { Profile } from './pages/profile/Profile';
import { UserPosts } from './components/profile/UserPosts';
import { Followers } from './components/profile/Followers';
import { Following } from './components/profile/Following';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts, getAllUsers } from './actions';
import { getBookmarks } from './actions/userActions';

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllPosts());
      dispatch(getAllUsers());
      dispatch(getBookmarks);
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div className='app'>
      <Container fluid className='min-vh-100 position-relative'>
        <Toaster />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<PrivateRoutes />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/bookmarks' element={<Bookmarks />} />
            <Route path='/profile/:username' element={<Profile />}>
              <Route index element={<UserPosts />} />
              <Route path='followers' element={<Followers />} />
              <Route path='following' index element={<Following />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
