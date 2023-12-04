import { HomeWelcome } from './home-welcome';
import { SnowFlakes } from './snowFlakes';

export const Home = () => {
  return (
    <div className='w-full h-[90%]'>
      <div className='flex items-center justify-evenly h-full'>
        <div className='flex flex-col gap-3 justify-center'>
          <h1 className='font-bold text-2xl'>
            Have you received an invitation to the christmas party from Linh?
          </h1>

          <h1 className='font-bold text-2xl text-center'>
            CLICK on the image down below
          </h1>

          <HomeWelcome />
        </div>
      </div>

      <SnowFlakes />
    </div>
  );
};
