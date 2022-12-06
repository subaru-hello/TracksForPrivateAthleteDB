import type { FC } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Highlight,
  Divider,
} from '@chakra-ui/react';
type Props = {
  my?: number | string;
};

const SiteOutline: FC<Props> = ({ my = 0 }) => {
  return (
    <Box>
      <Container mt={8} centerContent={true}>
        <Heading lineHeight="tall">
          <Highlight
            query="information"
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          >
            the more information
          </Highlight>
          <Divider orientation="horizontal" />
          <Highlight
            query="run"
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          >
            the easier you run
          </Highlight>
        </Heading>
        <Text fontSize="3xl" my={4}>
          一般開放されている競技場を探そう
        </Text>
      </Container>
    </Box>
  );
};

export default SiteOutline;
