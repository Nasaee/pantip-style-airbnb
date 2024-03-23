import { GoSearch } from 'react-icons/go';

const HeaderMobile = () => {
  return (
    <div className='md:hidden px-5 py-3 relative'>
      <div className='w-7 h-7 absolute top-1/2 -translate-y-1/2 left-8'>
        <GoSearch className='w-full h-auto ' />
      </div>
      <input
        placeholder='ค้นหาบน Pantip...'
        type='text'
        className=' w-full rounded-full px-12'
      />
    </div>
  );
};
export default HeaderMobile;
