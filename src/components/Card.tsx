import React from 'react';

interface CardProps {
  title: string;
  price: number;
  description: string;
  coverImage: string;
  discountRate: number;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  description,
  coverImage,
  discountRate,
}) => {
  const discountedPrice = price * ((100 - discountRate) / 100);

  return (
    <div  className="flex-wrap justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <img src={coverImage} alt={title} className="w-full h-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">${discountedPrice.toFixed(2)}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="bg-green-200 text-green-800 py-1 px-2 rounded">
          {discountRate}% OFF
        </div>
      </div>
    </div>
  );
};

export default Card;
