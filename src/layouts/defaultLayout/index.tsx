import { ReactNode } from 'react';
import { Header } from '../components/header';

type TDefaultLayout = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: TDefaultLayout) => {
  return (
    <div className='h-[100vh]'>
      <Header />

      {children}
    </div>
  );
};
