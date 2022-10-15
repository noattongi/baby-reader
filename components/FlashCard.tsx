import React from 'react';

interface Props {
  word: string;
}

const FlashCard: React.FC<Props> = ({word}: Props) => {
  return (
    <div style={word_card}>
      {word}
    </div>
  )
}

const word_card: React.CSSProperties = {
  fontSize: '320px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#EE0000',
  fontWeight: '600'
}

export default FlashCard;