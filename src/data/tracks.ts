import type { Track } from 'domains';

export const trackData: Track[] = [
  {
    id: 'oda',
    prefectureID: 'tokyo',
    name: '織田フィールド',
    address: '東京都渋谷区神南２丁目３−１',
    open_hour: '9:00~21:00',
    site_url: 'https://www.tokyo-park.or.jp/park/format/facilities039.html',
    entrance_fee: 0,
  }, {
    id: 'komazawa',
    prefectureID: 'tokyo',
    name: '駒沢オリンピック公園',
    address: '東京都世田谷区駒沢公園１−１',
    open_hour: '9:00~12:30,13:00~17:00',
    site_url: 'https://www.tef.or.jp/kopgp/parking.html',
    entrance_fee: 450,
  },
  {
    id: 'setagaya',
    prefectureID: 'tokyo',
    name: '世田谷運動場陸上競技場',
    address: '世田谷区大蔵4-6-1',
    open_hour:
      '平日9:00～15:00 420円、15:00～21:00 280円、土日祝9:00～15:00 480円、15:00～21:00 320円',
    site_url: 'https://www.tef.or.jp/kopgp/parking.html',
    entrance_fee: 280,
  },
  {
    id: 'yumenosima',
    prefectureID: 'tokyo',
    name: '夢の島競技場',
    address: '江東区夢の島1-1-2',
    open_hour: '月、水、金曜日 9:00～21:00',
    site_url: 'https://www.tef.or.jp/kopgp/parking.html',
    entrance_fee: 400,
  },
  {
    id: 'wada',
    prefectureID: 'tokyo',
    name: '和田堀公園第二競技場',
    address: '東京都杉並区堀ノ内１丁目１５',
    open_hour: '毎週水曜日、第1日曜日、第3土曜日 24時間利用可能',
    site_url: 'https://www.tef.or.jp/kopgp/parking.html',
    entrance_fee: 450,
  },
  {
    id: 'todoroki',
    prefectureID: 'kanagawa',
    name: '等々力競技場',
    address: '神奈川県川崎市中原区等々力1-1',
    open_hour: '毎週水曜日、第1日曜日、第3土曜日 24時間利用可能',
    site_url: 'https://www.city.kawasaki.jp/nakahara/page/0000088519.html',
    entrance_fee: 200,
  },
];
