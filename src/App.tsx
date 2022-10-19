import { FC, useState } from 'react';
import './App.css';
import { Heading } from '@chakra-ui/react';
import LiquorList from './components/LiquorList';
import type { Liquor } from './components/LiquorList';

const App: FC = () => {
  const liquors: Liquor[] = [
    {
      id: 1,
      name: 'ビール',
      price: 300,
      percentage: 5,
    },
    {
      id: 2,
      name: 'レモンサワー',
      price: 200,
      percentage: 5,
      amount: 150
    },
    {
      id: 3,
      name: 'ハイボール',
      price: 200,
      percentage: 7,
      amount: 350
    },
    {
      id: 4,
      name: '日本酒',
      price: 300,
      percentage: 12,
      amount: 120
    },
    {
      id: 5,
      name: '梅酒',
      price: 250,
      percentage: 12,
      amount: 90
    },
  ];

  return (
    <div className="container">
      <div>
        <Heading size="lg" as="h1" my={12}>
          「０軒目」商品一覧
        </Heading>
        <LiquorList shop="０軒目" liquors={liquors} />
      </div>
    </div>
  );
};

export default App;
