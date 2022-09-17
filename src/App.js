import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/Homepage';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { PrivateRoutes } from './components/private-routes/PrivateRoutes';
import { Explore } from './pages/explore/Explore';
import { Search } from './pages/search/Search';
import { Bookmarks } from './pages/bookmarks/Bookmarks';
import { Profile } from './pages/profile/Profile';
import { Posts } from './components/profile/Posts';
import { Followers } from './components/profile/Followers';
import { Following } from './components/profile/Following';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='app'>
      <Container fluid='lg' className='min-vh-100 position-relative'>
        <Toaster />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<PrivateRoutes />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/search' element={<Search />} />
            <Route path='/bookmarks' element={<Bookmarks />} />
            <Route path='/profile' element={<Profile />}>
              <Route index element={<Posts />} />
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
