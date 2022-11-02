import { useState, useEffect } from 'react';
import * as trackData from 'apis/tracks';
import type { Track } from 'domains';

const useTrack = () => {
  const [trackList, setTrackList] = useState<Track[]>([]);

  useEffect(() => {
    trackData.getAllTracksData().then((track) => {
      setTrackList([...track].reverse());
    });
  }, []);

  const addTrackListItem = (props: Track) => {
    // あたらしい競技場を作成する
    const newTrackItem = {
      id: props.id,
      name: props.name,
      address: props.address,
      furigana: props.furigana,
      site_url: props.site_url,
      entrance_fee: props.entrance_fee,
      prefectureID: props.prefectureID,
      open_hour: props.open_hour,
    };

    // サーバーのトラック追加APIを呼ぶ
    trackData.addTrackData(newTrackItem).then((addTrack) => {
      // addTrackをtrackListに追加してstateにセットする
      setTrackList([addTrack, ...trackList]);
    });
  };

  const deleteTrackListItem = (id: string) => {
    // サーバーの削除APIを呼ぶ
    trackData.deleteTrackData(id).then((deletedid) => {
      const newTrackList = trackList.filter((item) => item.id !== deletedid);
      // 1件削除された新しいtrackListに追加してstateにセットする
      setTrackList(newTrackList);
    });
  };

  // 作成した関数を返す
  return { trackList, addTrackListItem, deleteTrackListItem };
};

export default useTrack;
