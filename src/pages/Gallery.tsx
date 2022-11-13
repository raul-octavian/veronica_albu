import ImageGalley from '../components/imageGallery/ImageGallery';
import TextBoxContainer from '../components/textBox/TextBoxContainer';
import TextBoxHeader from '../components/textBox/TextBoxHeader';

const Gallery = () => {
  return (
    <div>
      <TextBoxHeader>
        <h1 className='text-accent-main text-4xl font-heading'>
          Lucrarile mele
        </h1>
      </TextBoxHeader>
      <TextBoxContainer>
        <div className='p-8'>
          <ImageGalley />
        </div>
      </TextBoxContainer>
    </div>
  );
};

export default Gallery;
