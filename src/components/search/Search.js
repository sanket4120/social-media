import { useEffect } from 'react';
import { useState } from 'react';
import { Form, InputGroup, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar } from '../avatar/Avatar';
import { User } from '../user/User';
import './search.css';

const Search = ({ className, ...restAttrs }) => {
  const { users } = useSelector((state) => state.users);
  const [query, setQuery] = useState('');
  const [serachResults, setSearchResults] = useState([]);

  useEffect(() => {
    let results = [];
    if (query) {
      results = users.filter((user) =>
        `${user.firstName} ${user.lastName}`
          .toLocaleLowerCase()
          .includes(query.toLowerCase())
      );
    }

    setSearchResults(results);
  }, [query, users]);

  return (
    <div className={`${className} search`} {...restAttrs}>
      <InputGroup>
        <InputGroup.Text id='basic-addon1' className='bg-white'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </InputGroup.Text>
        <Form.Control
          placeholder='Search'
          aria-label='Search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>

      {query && (
        <div className='search-results-container'>
          <div className='search-results bg-white shadow border rounded-3'>
            <ListGroup>
              {serachResults.length ? (
                serachResults.map((user) => (
                  <ListGroup.Item className='border-0' key={user._id}>
                    <Link
                      className='d-flex align-items-center'
                      to={`/profile/${user.username}`}
                    >
                      <User user={user} />
                    </Link>
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item className='border-0'>
                  <p className='m-0 text-center'>No results found</p>
                </ListGroup.Item>
              )}
            </ListGroup>
          </div>
        </div>
      )}
    </div>
  );
};

export { Search };
