import type { FC } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const SiteOutline: FC<{ my?: number | string }> = ({ my = 0 }) => (
  <Box my={my}>
    <Heading as="h2" size="lg">
      サイト概要
    </Heading>
    <Box mt={8}>
      <Text my={4}>
        関東の一般開放されている競技場の情報を集めたサイトです。
      </Text>
      <Text my={4}>
        色々なサイトを跨いで開放時間、貸出の有無、ハードルが跳べるか等を調べるのって疲れますよね。
      </Text>
      <Text my={4}>悩める社会人アスリートの時間を節約致します。</Text>
    </Box>
  </Box>
);

export default SiteOutline;
