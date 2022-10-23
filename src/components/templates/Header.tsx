import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { trackData } from 'data';
import  HeaderLinks  from 'components/organisms/HeaderLinks';

const Header: FC = () => {
const tracks = trackData;
const lists = ['']

    return(
      <Box>
        <HeaderLinks lists={lists} tracks={tracks}/>
      </Box>
    )
}

export default Header;
