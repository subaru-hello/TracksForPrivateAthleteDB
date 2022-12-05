import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { storage } from 'Firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import TrackImage from 'components/organisms/global/TrackImage';

const TrackImages: FC = () => {
  const [image, setImage] = useState('');
  const gsReference = ref(storage, 'athletics-stadium_13553.png');

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
      <TrackImage props={{ image: image }} />
    </Box>
  );
};

export default TrackImages;
