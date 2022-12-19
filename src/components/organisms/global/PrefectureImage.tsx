import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { storage } from 'Firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import BaseImage from 'components/atoms/BaseImage';
type Props = {
  props: {
    image: string;
  };
};
const PrefectureImage: FC<Props> = ({ props }) => {
  const [image, setImage] = useState('');
  const gsReference = ref(storage, props.image);

  useEffect(() => {
    getDownloadURL(gsReference)
      .then((url) => {
        setImage(url);
        console.log(image);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box boxSize="sm">
      <BaseImage image={image} />
    </Box>
  );
};

export default PrefectureImage;
