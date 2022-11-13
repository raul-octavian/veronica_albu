import { FC } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from './Image';

import ImageOne from '../../assets/all-white.jpg';
import ImageTwo from '../../assets/main_diamond_cropped.jpg';
import ImageThree from '../../assets/red_shine.jpg';
import ImageFour from '../../assets/white_and_shine.jpg';

const ImageGalley: FC = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter='20px'>
        <Image src={ImageOne} />
        <Image src={ImageTwo} />
        <Image src={ImageThree} />
        <Image src={ImageFour} />
        <Image src={ImageOne} />
        <Image src={ImageTwo} />
        <Image src={ImageThree} />
        <Image src={ImageFour} />
        <Image src={ImageOne} />
        <Image src={ImageTwo} />
        <Image src={ImageThree} />
        <Image src={ImageFour} />
        <Image src={ImageOne} />
        <Image src={ImageTwo} />
        <Image src={ImageThree} />
        <Image src={ImageFour} />
      </Masonry>
    </ResponsiveMasonry>
  );
};
export default ImageGalley;
