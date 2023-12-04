import wreathImage from '../../assets/wreath.jpg';
import santaClausImage from '../../assets/santaClaus1.gif';

export const HomeWelcome = () => {
  const handleMoveImage = () => {
    const coverImage = document.getElementById('cover-image');

    if (coverImage) {
      coverImage.style.top = '-250px';
      coverImage.style.left = '-220px';
      coverImage.style.opacity = '0';
      coverImage.style.transition = '1.5s';
    }
  };
  return (
    <div className='flex justify-center'>
      <div className='border-orange-600 border-solid border-2 p-4 rounded-md w-[350px] h-[350px] flex flex-col justify-between relative'>
        <h2 className='text-center font-bold text-lg'>
          Getting ready to explore more?
        </h2>

        <img src={santaClausImage} />
        <img
          id='cover-image'
          onClick={handleMoveImage}
          className='absolute w-[353px] h-[352px] top-[-3px] left-[-3px] max-w-none rounded-md cursor-pointer border-transparent border-solid border-[1px] hover:border-white'
          src={wreathImage}
        />

        <button className='mx-auto block'>GET GOIN'!</button>
      </div>
    </div>
  );
};
