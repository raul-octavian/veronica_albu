import ArrowDown from '../components/icons/ArrowDown';
import Logo from '../components/Logo/Logo';
import PhyLogo from '../components/phyLogo/PhyLogo';
const Home = () => {
  return (
    <>
      <section className='flex flex-col justify-center pb-24 h-screen'>
        <div className='items-center flex-1 shrink-1 flex flex-col justify-center'>
          <Logo />
        </div>
        <div className='text-accent-main flex justify-center'>
          <ArrowDown />
        </div>
      </section>
      <div className='bg-accent-main py-4'>
        <PhyLogo />
      </div>
      
    </>
  );
};

export default Home;
