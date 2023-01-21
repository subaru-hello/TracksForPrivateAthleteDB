import { Box, Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
const News = () => {
  return (
    <Box>
      <h1>新着情報</h1>
      <List spacing={3}>
        <ListItem>
          <Flex>
            <Text>1/21</Text>
            <Text>等々力競技場</Text>
          </Flex>
          <ListIcon as={FaCircle} color="green.500" />
          個人開放情報が更新されました。
        </ListItem>
        <ListItem>
          <Flex>
            <Text>1/21</Text>
            <Text>夢の島競技場</Text>
          </Flex>
          <ListIcon as={FaCircle} color="green.500" />
          個人開放情報が更新されました。
        </ListItem>
      </List>
    </Box>
  );
};

export default News;
