import { FC, ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { queryDatas } from 'apis/firebase/comments';
console.log(queryDatas[0])
const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

interface IPublisher {
  name: string;
  date: Date;
  title: string;
}
interface ISpeechProps {
  comment_title: string;
  body: string;
  publisher: IPublisher
}

export const SpeechList: FC<ISpeechProps> = (props) => {
  return (
    <Testimonial>
      <TestimonialContent>
        <TestimonialHeading>{props.comment_title}</TestimonialHeading>
        <TestimonialText>{props.body}</TestimonialText>
      </TestimonialContent>
      <TestimonialAvatar
        src={
          'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
        name={props.publisher.name}
        title={props.publisher.title}
      />
    </Testimonial>
  );
};

const WithSpeechBubbles = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="lg"
      my={2}
    >
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>利用者の声</Heading>
        </Stack>
        <Stack
          direction={{ base: 'column' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <SimpleGrid columns={{ sm: 2, md: 1 }}>
            {queryDatas.map((comment, index) => (
              <Box key={index} alignContent={'center'} my={6}>
                <SpeechList comment_title={comment.title} body={comment.body} publisher={{name: 'subaru', title: 'vice president', date: new Date('2022-04-06T19:01:27Z')}} />
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default WithSpeechBubbles;
