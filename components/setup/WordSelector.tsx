import React from 'react';

interface Word {
  word: string;
  category: string;
  reads: number;
}

interface Props {
  word: Word;
}

const WordSelector: React.FC<Props> = ({word}) => {
  return (
    <div>
      {word.word}
    </div>
  )
}

export default WordSelector;