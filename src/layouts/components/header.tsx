import { Audio } from './audio';
import { Login } from './login';

export const Header = () => {
  return (
    <div className='flex justify-between items-center h-[10%] px-2'>
      <Login />
      <Audio />
    </div>
  );
};
