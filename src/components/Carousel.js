const Carousel = () => {
  return (
    <div className='px-12 mt-8'>
      <h3 className='text-white font-semibold text-xl mb-4'>
        Recent Creatives
      </h3>
      <div className='flex gap-x-6 w-full overflow-x-scroll'>
        {/* TODO: Make a scrollbar for this */}
        <div className='h-48 w-72 bg-white rounded-xl opacity-60'></div>
        <div className='h-48 w-72 bg-white rounded-xl opacity-60'></div>
        <div className='h-48 w-72 bg-white rounded-xl opacity-60'></div>
        <div className='h-48 w-72 bg-white rounded-xl opacity-60'></div>
        <div className='h-48 w-72 bg-white rounded-xl opacity-60'></div>
      </div>
    </div>
  );
};

export default Carousel;
