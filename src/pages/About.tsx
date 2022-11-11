import Portrait from '../assets/portrait.jpg';
import TextBoxContainer from '../components/textBox/TextBoxContainer';
import TextBoxWithCtaAndImage from '../components/textBox/TextBoxWithCtaAndImage';
const About = () => {
  return (
    <>
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

      <TextBoxContainer>
        <TextBoxWithCtaAndImage title='Misiunea mea' w='full' lgW='[60%]'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            distinctio incidunt optio ea deleniti expedita aspernatur? Non odit
            ea qui, dolor laborum suscipit voluptate dignissimos consequuntur
            nemo neque saepe in?
          </p>
        </TextBoxWithCtaAndImage>
        <TextBoxWithCtaAndImage
          ctaValue='Programeaza-te'
          title='Valorile mele'
          w='full'
          lgW='[60%]'
        >
          <p>
            Impedit veritatis minima fugit sequi dignissimos vitae, suscipit
            nihil architecto dolor asperiores omnis necessitatibus ea.
            Voluptatibus, quaerat. Sit voluptatem, quae amet inventore non
            debitis similique ratione impedit quasi natus cumque dicta
            consectetur perferendis vel beatae culpa?
          </p>
        </TextBoxWithCtaAndImage>
      </TextBoxContainer>
    </>
  );
};

export default About;
