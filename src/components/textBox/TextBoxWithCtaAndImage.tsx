import { FC } from 'react';
import LargeButton from '../buttons/LargeButton';
import TextBoxContainer from './TextBoxContainer';
import TextBoxContent from './TextBoxContent';
import TextBoxContentWarper from './TextBoxContentWarper';
import TextBoxHeader from './TextBoxHeader';

type TextBoxWithCtaAndImageProps = {
  image?: string;
  ctaValue?: string;
  children: JSX.Element | JSX.Element[];
  title?: string;
  link?: string;
  w?: string;
  lgW?: string;
};

const TextBoxWithCtaAndImage: FC<TextBoxWithCtaAndImageProps> = ({
  image,
  ctaValue,
  children,
  title,
  link,
  w,
  lgW,
}) => {
  return (
    <TextBoxContainer w={w} lgW={lgW}>
      <TextBoxContentWarper>
        <TextBoxHeader>
          <h2 className='text-2xl'>{title}</h2>
        </TextBoxHeader>

        <TextBoxContent image={image}>{children}</TextBoxContent>
      </TextBoxContentWarper>

      <LargeButton value={ctaValue} link={link} />
    </TextBoxContainer>
  );
};
export default TextBoxWithCtaAndImage;
