import React, { FC } from 'react';
import { Grid, GridItem, Container, Heading } from '@chakra-ui/react';

const TrackProfile: FC = () => {
  const title = 'トラック紹介';
  return (
    <Container>
      <Heading>{title}</Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </Container>
  );
};

export default TrackProfile;
