import React from 'react';
import Card from './components/Card'; // Make sure to adjust the import path based on your project structure
import image1 from '../public/download (1).jfif';
import image2 from '../public/download.jfif';
import image3 from '../public/download (2).jfif';

function App() {
  const lists = [
    {
      title: 'alchemist',
      coverImage: image1,
      price: 100,
      description: 'thank you r dsha',
      discountRate: 20,
    },
    {
      title: 'alchemist',
      coverImage: image2,
      price: 100,
      description: 'thank you r dsha',
      discountRate: 20,
    },
    {
      title: 'alchemist',
      coverImage: image3,
      price: 100,
      description: 'thank you r dsha',
      discountRate: 20,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      {lists.map((list, index) => (
        <Card
          key={index}
          title={list.title}
          price={list.price}
          description={list.description}
          coverImage={list.coverImage}
          discountRate={list.discountRate}
        />
      ))}
    </div>
  );
}

export default App;
