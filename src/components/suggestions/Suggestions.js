import { User } from '../cards/user/User';

const Suggestions = () => {
  return (
    <div className='bg-white rounded-3 p-1'>
      <h2 className='fs-6 text-center text-capitalize my-3'>who to follow</h2>
      <div>
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export { Suggestions };
