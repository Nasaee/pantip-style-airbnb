import { GoSearch } from 'react-icons/go';
import { IoMenuOutline } from 'react-icons/io5';

const HeaderMobile = () => {
  return (
    <div className='flex justify-between px-2 md:hidden '>
      <div className='px-5 py-3 relative flex-1'>
        <div className='w-7 h-7 absolute top-1/2 -translate-y-1/2 left-8'>
          <GoSearch className='w-full h-auto ' />
        </div>
        <input
          placeholder='ค้นหาบน Pantip...'
          type='text'
          className=' w-full rounded-full pl-12 pr-4 py-3 bg-white shadow-custom1'
        />
      </div>
      <div className='grid place-items-center'>
        <button>
          <IoMenuOutline className='text-3xl hover:text-violet-600' />
        </button>
      </div>
    </div>
  );
};
export default HeaderMobile;
