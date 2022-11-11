import { FC } from 'react';
import TextBoxContentWarper from '../textBox/TextBoxContentWarper';
import TextBoxHeader from '../textBox/TextBoxHeader';
import TestimonialCard from './TestimonialCard';
import TestimonialsContainer from './TestimonialsContainer';
import TestimonialImage from '../../assets/testimonial_placeholder.jpg';

const Testimonials: FC = () => {
  return (
    <TestimonialsContainer>
      <TextBoxHeader>
        <h2 className='text-2xl'>Ce spun altii</h2>
      </TextBoxHeader>
      <div className='block md:flex flex-wrap justify-center gap-10'>
        <TestimonialCard>
          <TextBoxContentWarper>
            <div className='px-4'>
              <header className='sm:flex mb-4'>
                <img
                  src={TestimonialImage}
                  alt='testimonial author'
                  className='mx-auto'
                />
                <div className='flex-1 flex justify-center sm:justify-start'>
                  <div className='ml-4'>
                    <h3 className='text-lg'>Numele meu</h3>
                    <p className='whitespace-nowrap'>product manager</p>
                  </div>
                </div>
              </header>
              <p className='text-sm tracking-wide leading-6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident consequuntur explicabo molestias quisquam culpa
                impedit est, illo soluta aliquid veniam, voluptate perferendis
                adipisci laborum, magni vel a? Mollitia numquam aliquam quia
                aliquid, earum, voluptate recusandae ex eos quibusdam optio
                pariatur repellat sequi expedita. Earum ex recusandae itaque
                alias odio repudiandae?
              </p>
            </div>
          </TextBoxContentWarper>
        </TestimonialCard>
        <TestimonialCard>
          <TextBoxContentWarper>
            <div className='px-4'>
              <header className='sm:flex mb-4'>
                <img
                  src={TestimonialImage}
                  alt='testimonial author'
                  className='mx-auto'
                />
                <div className='flex-1 flex justify-center sm:justify-start'>
                  <div className='ml-4'>
                    <h3 className='text-lg'>Numele meu</h3>
                    <p className='whitespace-nowrap'>product manager</p>
                  </div>
                </div>
              </header>
              <p className='text-sm tracking-wide leading-6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident consequuntur explicabo molestias quisquam culpa
                impedit est, illo soluta aliquid veniam, voluptate perferendis
                adipisci laborum, magni vel a? Mollitia numquam aliquam quia
                aliquid, earum, voluptate recusandae ex eos quibusdam optio
                pariatur repellat sequi expedita. Earum ex recusandae itaque
                alias odio repudiandae?
              </p>
            </div>
          </TextBoxContentWarper>
        </TestimonialCard>
        <TestimonialCard>
          <TextBoxContentWarper>
            <div className='px-4'>
              <header className='sm:flex mb-4'>
                <img
                  src={TestimonialImage}
                  alt='testimonial author'
                  className='mx-auto'
                />
                <div className='flex-1 flex justify-center sm:justify-start'>
                  <div className='ml-4'>
                    <h3 className='text-lg'>Numele meu</h3>
                    <p className='whitespace-nowrap'>product manager</p>
                  </div>
                </div>
              </header>
              <p className='text-sm tracking-wide leading-6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident consequuntur explicabo molestias quisquam culpa
                impedit est, illo soluta aliquid veniam, voluptate perferendis
                adipisci laborum, magni vel a? Mollitia numquam aliquam quia
                aliquid, earum, voluptate recusandae ex eos quibusdam optio
                pariatur repellat sequi expedita. Earum ex recusandae itaque
                alias odio repudiandae?
              </p>
            </div>
          </TextBoxContentWarper>
        </TestimonialCard>
      </div>
    </TestimonialsContainer>
  );
};
export default Testimonials;
