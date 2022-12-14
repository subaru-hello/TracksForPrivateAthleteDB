import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import TrackComment from './TrackComment';
import { trackData } from 'data';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import trackImage from 'assets/base_track.png';
import { AuthContext } from 'auth/AuthProvider';
import { useEffect } from 'preact/hooks';

type Props = {
  prefecture_name: string;
};
function TrackDetails({ prefecture_name }: Props) {
  const { trackID = '' } = useParams();
  const [userId, setUserId] = useState('');
  const trackDetail = trackData.filter((track) => track.id === trackID);
  const { currentUser } = useContext(AuthContext);

  const userHook = () => {
    useEffect(() => {
      if (currentUser) {
        setUserId(currentUser.uid);
      } else {
        setUserId('subaru');
      }
    }, []);
  };
  userHook;

  return (
    <Box>
      {trackDetail.map((track) => (
        <SimpleGrid key={track.id}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={trackImage}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              >
                {track.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
              >
                {prefecture_name}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  ??????
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>???????????????(??????)</ListItem>
                    <ListItem>400m????????????</ListItem>{' '}
                    <ListItem>??????????????????</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>???????????????</ListItem>
                    <ListItem>?????????????????????</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  ????????????
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      ??????:
                    </Text>{' '}
                    {track.address}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      ??????????????????:
                    </Text>{' '}
                    {track.open_hour}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      ????????????
                    </Text>{' '}
                    {track.entrance_fee}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      ?????????URL:
                    </Text>{' '}
                    <a href={track.site_url} target="_blank" rel="noreferrer">
                      ?????????URL: {track.site_url}
                      <ExternalLinkIcon mx="2px" />
                    </a>
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              ????????????????????????
            </Button>
          </Stack>
          <TrackComment track_id={track.id} user_id={userId} />
        </SimpleGrid>
      ))}
    </Box>
  );
}

export default TrackDetails;
