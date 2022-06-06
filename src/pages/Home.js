import Logo from '../imgs/logo-white.png';
import {
  ChatAltIcon,
  PhoneOutgoingIcon,
  DownloadIcon,
} from '@heroicons/react/outline';
import Icon from '../components/Icon';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className='p-2'>
      <img
        src={Logo}
        className='w-52 mx-auto'
        alt='Headstart Media Factory Logo'
      />
      <nav className='px-12 flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-white '>Hi, Ashish!</h2>
        <div className='flex gap-x-4'>
          <Icon IconName={ChatAltIcon} />
          <Icon IconName={PhoneOutgoingIcon} />
          <Icon IconName={DownloadIcon} />
        </div>
      </nav>
      <Carousel />
    </div>
  );
};

export default Home;
