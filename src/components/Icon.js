const Icon = ({ IconName }) => {
  return (
    <div className='bg-white h-12 w-12 rounded-full flex items-center justify-center hover:bg-slate-200'>
      <IconName className='h-6 w-6 text-gray-700' />
    </div>
  );
};

export default Icon;
