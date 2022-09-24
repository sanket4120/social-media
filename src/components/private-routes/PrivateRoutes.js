import { Col, Row } from 'react-bootstrap';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../navbar/Navbar';
import { Suggestions } from '../suggestions/Suggestions';
import { useSelector } from 'react-redux';
import './private-routes.css';

const PrivateRoutes = () => {
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.user);

  return isAuthenticated ? (
    <Row>
      <Col as='aside' className='nav-container' md={3}>
        <Navbar />
      </Col>
      <Col
        as='main'
        md={9}
        lg={6}
        className='border-start border-end p-0 min-vh-100'
      >
        <Outlet />
      </Col>

      <Col as='aside' className='d-none d-lg-block' lg={3}>
        <Suggestions />
      </Col>
    </Row>
  ) : (
    <Navigate to='/login' state={{ from: location.pathname }} />
  );
};

export { PrivateRoutes };
