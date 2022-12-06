import type { FC } from 'react';
import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Box } from '@chakra-ui/react';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';

const Calender: FC = () => {
  return (
    <Box>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale="ja"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek, listWeek',
        }}
        events={[
          { title: '等々力', start: '2022-12-14' },
          {
            title: '等々力',
            start: '2022-12-15',
            end: '2022-12-17',
          },
        ]}
      />
    </Box>
  );
};

export default Calender;
