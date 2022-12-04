import type { FC } from 'react';
import { Box, Heading, Text, List, ListItem, Tr, Td } from '@chakra-ui/react';
import type { AvailableDate } from 'domains';
type Props = {
  calender: AvailableDate;
};

const TrackForPublicCalender: FC<Props> = ({ calender }) => {
  return (
    <>
      <Td>{calender.day}</Td>
      <Td>{calender.day_of_week}</Td>
      <Td>{calender.event}</Td>
      <Td>{calender.availability_am ? '◯' : '✖️'}</Td>
      <Td>{calender.availability_pm ? '◯' : '✖️'}</Td>
    </>
  );
};

export default TrackForPublicCalender;
