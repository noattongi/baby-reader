import React from 'react';
import CardSet from '../components/CardSet';
import Link from 'next/link';

const Cards: React.FC = () => {
  return (
    <div style={cards_page_styles}>
      <CardSet/>
    </div>
  )
}

const cards_page_styles: React.CSSProperties = {
  height: '100%',
  overflow: 'hidden',
}

export default Cards;