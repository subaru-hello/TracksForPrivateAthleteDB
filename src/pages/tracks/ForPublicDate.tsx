import type { FC } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  Container,
} from '@chakra-ui/react';
import { availableDateData } from 'data/available_date';
import { Helmet } from 'react-helmet-async';
import TrackForPublicCalender from 'components/organisms/tracks/TrackForPublicCalender';
const title = '個人向け開放状況カレンダー';

const ForPublicDate: FC = () => (
  <Box maxW="3xl">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Container>
      <Heading as="h1" size="xl" my={4}>
        {title}
      </Heading>
    </Container>
    <TableContainer>
      <Table variant="simple">
        <TableCaption>個人向け開放情報</TableCaption>
        <Thead>
          <Tr>
            <Th>日</Th>
            <Th>曜日</Th>
            <Th>イベント</Th>
            <Th>午前</Th>
            <Th>午後</Th>
          </Tr>
        </Thead>
        {availableDateData.map((calender) => (
          <Tbody key={calender.id}>
            <Tr>
              <TrackForPublicCalender calender={calender} />
            </Tr>
          </Tbody>
        ))}
        <Tfoot>
          <Tr>
            <Th>日</Th>
            <Th>曜日</Th>
            <Th>イベント</Th>
            <Th>午前</Th>
            <Th>午後</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  </Box>
);

export default ForPublicDate;
