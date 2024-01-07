import { Flex, Spinner } from '@chakra-ui/react';
const Loading = () => {
  return (
    <Flex my={14} h="20rem" justify="center" align="center">
      <Spinner size="xl" />
    </Flex>
  );
};

export default Loading;
