import React from 'react';
import CardSet from '../components/CardSet';
import Link from 'next/link';

const Cards: React.FC = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-300'>
      <CardSet/>
    </div>
  )
}

export default Cards;