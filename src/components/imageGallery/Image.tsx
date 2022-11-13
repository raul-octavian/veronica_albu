import { FC } from 'react';

type ImageProps = {
  src: string;
  alt?: string;
};

const Image: FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt ?? src} className='w-full' />;
};
export default Image;
