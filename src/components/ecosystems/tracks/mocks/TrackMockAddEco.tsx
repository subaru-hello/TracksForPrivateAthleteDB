import type { FC } from 'react';
import { useRef } from 'react';
import {
  Input,
  Container,
  FormLabel,
  Button,
  Box,
  Text,
  List,
  ListItem,
  Flex,
  Avatar,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import useTrack from 'hooks/useTrack';

const TrackMockNewEco: FC = () => {
  // hooksを呼び出す
  const { addTrackListItem, trackList, deleteTrackListItem } = useTrack();

  // 入力する要素の数だけuseRefオブジェクトを作成する
  const refInputName = useRef<HTMLInputElement>(null);
  const refInputId = useRef<HTMLInputElement>(null);
  const refInputAddress = useRef<HTMLInputElement>(null);
  const refInputOpenHour = useRef<HTMLInputElement>(null);
  const refInputPrefectureId = useRef<HTMLInputElement>(null);
  const refInputSiteUrl = useRef<HTMLInputElement>(null);
  const refInputEntranceFee = useRef<HTMLInputElement>(null);
  const refFurigana = useRef<HTMLInputElement>(null);

  const handleDeleteTrackListItem: any = (id: string) => {
    deleteTrackListItem(id);
  };

  const handleAddTrackListItem = () => {
    // if (refInputName.current.name === '') {
    //   return;
    // }
    addTrackListItem({
      id: refInputId.current!.value,
      name: refInputName.current!.value,
      address: refInputAddress.current!.value,
      furigana: refFurigana.current!.value,
      site_url: refInputSiteUrl.current!.value,
      entrance_fee: refInputEntranceFee.current!.valueAsNumber,
      prefectureID: 'kanagawa',
      open_hour: refInputOpenHour.current!.value,
    });
  };

  return (
    <Container>
      <form onSubmit={handleAddTrackListItem}>
        <FormLabel htmlFor="id">ID</FormLabel>
        <Input ref={refInputId} id="id" placeholder="bigdome" />
        <FormLabel htmlFor="trackName">Track Name</FormLabel>
        <Input ref={refInputName} id="name" placeholder="ビックドーム" />

        <FormLabel htmlFor="address">Address</FormLabel>
        <Input ref={refInputAddress} placeholder="東京都目黒区" />

        <FormLabel htmlFor="furigana">Furigana</FormLabel>
        <Input ref={refFurigana} id="furigana" placeholder="びっくどーむ" />

        <FormLabel htmlFor="site_url">SiteUrl</FormLabel>
        <Input ref={refInputSiteUrl} placeholder="https://hoge.site" />

        <FormLabel htmlFor="entrance_fee">EntranceFee</FormLabel>
        <NumberInput>
          <NumberInputField type="number" ref={refInputEntranceFee} />
        </NumberInput>

        <FormLabel htmlFor="trackName">Prefecture ID</FormLabel>
        <Input ref={refInputPrefectureId} id="prefecture" placeholder="tokyo" />

        <FormLabel htmlFor="open hour">OpenHor</FormLabel>
        <Input ref={refInputOpenHour} placeholder="9:00~2:00" />

        <Button type="submit">+ Trackを追加</Button>
      </form>

      <Box>
        <List my={10}>
          {trackList.map((track) => (
            <ListItem key={track.id} m={6}>
              <Flex>
                <Avatar size="md" bg="teal.500" />
                <Box textAlign="left" ml={3}>
                  <Text>{track.name}</Text>
                  <Text as="span">場所{track.address}</Text>

                  <Text as="span" ml={2}>
                    {track.open_hour ?? '不明'}
                  </Text>
                  <Text as="span" ml={2}>
                    {track.entrance_fee}円
                  </Text>
                  <Text as="span" ml={2}>
                    {track.site_url ?? '不明'}
                  </Text>
                  <Button onClick={() => handleDeleteTrackListItem(track.id)}>
                    削除する
                  </Button>
                </Box>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TrackMockNewEco;
