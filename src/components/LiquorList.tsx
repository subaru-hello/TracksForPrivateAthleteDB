import type { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

export interface Liquor {
  id: number;
  name: string;
  price?: number;
  percentage: number;
  amount?: number;
}

type Props = {
  shop: string;
  liquors: Liquor[];
};

const LiquorList: FC<Props> = ({ shop, liquors }) => {
  return (
    <div>
      <Heading size="md" as="h2">
        {shop}
      </Heading>
      <List my={8}>
        {liquors.map((liquor) => (
          <ListItem key={liquor.id} m={6}>
            <Flex>
              <Avatar size="md" bg="teal.500" />
              <Box textAlign="left" ml={3}>
                <Text>{liquor.name}</Text>
                <Text as="span">{liquor.percentage}%</Text>
                <Text as="span" ml={2}>
                  {liquor.price ?? '時価'}円
                </Text>
                <Text as="span" ml={2}>
                  {liquor.amount ?? '???'}ml
                </Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LiquorList;
