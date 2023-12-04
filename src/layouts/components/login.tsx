import LoginIcon from '@mui/icons-material/Login';
import HailIcon from '@mui/icons-material/Hail';

export const Login = () => {
  return (
    <div className='h-fit flex items-center'>
      <button className='mr-2 bg-[#fd5dc5] hover:bg-[#e14eae] active:bg-[#6d2454] flex gap-1'>
        Login
        <LoginIcon />
      </button>
      <button className='flex gap-1 bg-[#3ed595] hover:bg-[#2ea472] active:bg-[#1f714e]'>
        Guests <HailIcon />
      </button>
    </div>
  );
};
