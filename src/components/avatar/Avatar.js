import { Image } from 'react-bootstrap';
import './avatar.css';

const Avatar = ({ src, size }) => {
  return (
    <Image
      src={src}
      roundedCircle
      className={`avatar ${size && `avatar-${size}`}`}
    />
  );
};

export { Avatar };
