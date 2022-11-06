import ArrowDown from '../components/icons/ArrowDown';
import Logo from '../components/Logo/Logo';
import PhyLogo from '../components/phyLogo/PhyLogo';
import Portrait from '../assets/portrait.jpg';
import TextBoxWithCtaAndImage from '../components/textBox/TextBoxWithCtaAndImage';
import Testimonials from '../components/testimonials/Testimonials';
import TextBoxHeader from '../components/textBox/TextBoxHeader';
import MappingSprancene from '../assets/eyebrow-mapping.png';
import NailShapes from '../assets/nail-shape.png';
import PhyLogoImage from '../assets/PhyLogo.png';
import Cupio from '../assets/logo_cupio_black.png';

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

      <TextBoxWithCtaAndImage
        ctaValue='Programeaza-te'
        image={Portrait}
        title='Eu in cateva cuvinte'
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          distinctio incidunt optio ea deleniti expedita aspernatur? Non odit ea
          qui, dolor laborum suscipit voluptate dignissimos consequuntur nemo
          neque saepe in?
        </p>
        <p>
          Impedit veritatis minima fugit sequi dignissimos vitae, suscipit nihil
          architecto dolor asperiores omnis necessitatibus ea. Voluptatibus,
          quaerat. Sit voluptatem, quae amet inventore non debitis similique
          ratione impedit quasi natus cumque dicta consectetur perferendis vel
          beatae culpa?
        </p>
      </TextBoxWithCtaAndImage>

      <TextBoxWithCtaAndImage>
        <p className='tracking-wider leading-6 my-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          distinctio incidunt optio ea deleniti expedita aspernatur? Non odit ea
          qui, dolor laborum suscipit voluptate dignissimos consequuntur nemo
          neque saepe in?
        </p>
        <p className='tracking-wider leading-6 my-4 last:my-0'>
          Impedit veritatis minima fugit sequi dignissimos vitae, suscipit nihil
          architecto dolor asperiores omnis necessitatibus ea. Voluptatibus,
          quaerat. Sit voluptatem, quae amet inventore non debitis similique
          ratione impedit quasi natus cumque dicta consectetur perferendis vel
          beatae culpa?
        </p>
      </TextBoxWithCtaAndImage>

      <Testimonials />

      <TextBoxHeader>
        <h2>Servicii</h2>
      </TextBoxHeader>

      <TextBoxWithCtaAndImage
        image={MappingSprancene}
        title='Mapping sprancene gratuit'
        ctaValue='Programeaza-te'
      >
        <p>
          Toti ne nastem cu spracenele perfetc simetrice dar timpul, gravitatia
          si interventia umana repeatata le deformeaza.
        </p>
        <p>
          Din fericiere sunt metode si tehnici de tatuaj prin care ele pot fi
          aduse la forma lor naturala. Daca sunteti curiosi cum ar trebui sa
          arate sparncenele voastre, va invit la o sedinta de mapping, complet
          gratuita.
        </p>
      </TextBoxWithCtaAndImage>

      <TextBoxWithCtaAndImage
        image={NailShapes}
        title='Consultanta unghii gratuit'
        ctaValue='Programeaza-te'
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
          officia. Blanditiis quis sunt, eveniet omnis impedit repellendus cum
          totam accusantium qui suscipit aut commodi minima repudiandae
          similique ex officiis architecto?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          aliquid cumque officia reprehenderit et tenetur impedit, officiis
          harum velit ullam eligendi ipsa delectus, assumenda a pariatur laborum
          porro suscipit accusantium quisquam cupiditate. Quidem consectetur
          repellendus aut delectus odio temporibus reprehenderit nam nobis
          accusamus? Aliquam eius saepe sint, optio harum non, odio ullam
          dignissimos nemo quae eveniet temporibus praesentium! Repellendus,
          dolorem.
        </p>
      </TextBoxWithCtaAndImage>
      <TextBoxWithCtaAndImage
        title='Alte servicii'
        ctaValue='Afla mai multe'
        link='servicii'
      >
        <p className='md:w-1/2 md:mx-auto'>
          Va invit sa cititi mai multe despre serviciile pe care le ofer pe
          pagina servicii, o sas gesttoi acolo toate informatiile de care ai
          nevoi. In cazul in care nu gasesti tot ceea ce te intereseaza te rog
          sa nu exit sa ma conatactezi
        </p>
      </TextBoxWithCtaAndImage>

      <TextBoxWithCtaAndImage
        title='Produse'
        ctaValue='Afla mai multe'
        link='servicii'
      >
        <p className='md:w-1/2 md:mx-auto'>
          Lucararile mele sunt sustiunte de cele mai bune branduri din Romania
          si din strainatate. In permanenta caut sa gasesc cele mai noi is mai
          bune produse pentru a oferi cele mai bune servicii
        </p>
      </TextBoxWithCtaAndImage>
      <TextBoxWithCtaAndImage title='Produse cu care lucrez'>
        <div className='h-32 flex gap-6 justify-center py-6 flex-wrap'>
          <img src={PhyLogoImage} alt='logo' className='h-full' />
          <img src={Cupio} alt='logo' className='h-full' />
        </div>
      </TextBoxWithCtaAndImage>
    </>
  );
};

export default Home;
