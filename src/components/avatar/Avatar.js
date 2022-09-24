import { Image } from 'react-bootstrap';
import './avatar.css';

const Avatar = ({ src, size, ...rest }) => {
  return (
    <div {...rest}>
      {src ? (
        <Image
          src={src}
          roundedCircle
          className={`avatar ${size && `avatar-${size}`}`}
        />
      ) : (
        <div
          className={`avatar rounded-circle bg-light border ${
            size && `avatar-${size}`
          }`}
        >
          <span className='w-100 h-100 d-flex align-items-center justify-content-center m-0 p-2'>
            SJ
          </span>
        </div>
      )}
    </div>
  );
};

export { Avatar };
