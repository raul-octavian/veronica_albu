import ArrowDown from '../components/icons/ArrowDown';
import Logo from '../components/Logo/Logo';
import PhyLogo from '../components/phyLogo/PhyLogo';
import Portrait from '../assets/portrait.jpg';
import LargeButton from '../components/buttons/LargeButton';
import TextBoxContainer from '../components/textBox/TextBoxContainer';
import TextBoxHeader from '../components/textBox/TextBoxHeader';
import TextBoxContentWarper from '../components/textBox/TextBoxContentWarper';
import TextBoxContent from '../components/textBox/TextBoxContent';

const Home = () => {
  return (
    <>
      <section className='flex flex-col justify-center pb-24 h-screen'>
        <Logo />
        <div className='text-accent-main flex justify-center'>
          <ArrowDown />
        </div>
      </section>
      <div className='bg-accent-main py-4'>
        <PhyLogo />
      </div>

      <TextBoxContainer>
        <TextBoxContentWarper>
          <TextBoxHeader>
            <h2 className='text-2xl'>Eu in cateva cuvinte</h2>
          </TextBoxHeader>

          <TextBoxContent image={Portrait}>
            <p className='tracking-wider leading-6 my-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis distinctio incidunt optio ea deleniti expedita
              aspernatur? Non odit ea qui, dolor laborum suscipit voluptate
              dignissimos consequuntur nemo neque saepe in?
            </p>
            <p className='tracking-wider leading-6 my-4 last:my-0'>
              Impedit veritatis minima fugit sequi dignissimos vitae, suscipit
              nihil architecto dolor asperiores omnis necessitatibus ea.
              Voluptatibus, quaerat. Sit voluptatem, quae amet inventore non
              debitis similique ratione impedit quasi natus cumque dicta
              consectetur perferendis vel beatae culpa?
            </p>
          </TextBoxContent>

          <TextBoxContent>
            <p className='tracking-wider leading-6 my-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis distinctio incidunt optio ea deleniti expedita
              aspernatur? Non odit ea qui, dolor laborum suscipit voluptate
              dignissimos consequuntur nemo neque saepe in?
            </p>
            <p className='tracking-wider leading-6 my-4 last:my-0'>
              Impedit veritatis minima fugit sequi dignissimos vitae, suscipit
              nihil architecto dolor asperiores omnis necessitatibus ea.
              Voluptatibus, quaerat. Sit voluptatem, quae amet inventore non
              debitis similique ratione impedit quasi natus cumque dicta
              consectetur perferendis vel beatae culpa?
            </p>
          </TextBoxContent>
        </TextBoxContentWarper>

        <LargeButton value='Programeaza-te' />
      </TextBoxContainer>
    </>
  );
};

export default Home;
