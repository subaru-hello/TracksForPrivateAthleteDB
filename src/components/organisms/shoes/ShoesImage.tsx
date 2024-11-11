import type { FC } from 'react';
import BaseImage from 'components/atoms/BaseImage';

interface Props {
  image: string;
}

const ShoesImage: FC<Props> = (props) => {
  return <BaseImage src={props.image} />;
};

export default ShoesImage;
