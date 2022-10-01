import React from 'react';

interface Props {
  word: string;
}

const FlashCard: React.FC<Props> = ({word}: Props) => {
  return (
    <div className="word-card flex justify-center items-center bg-white border border-solid border-black w-4/5 h-2/4 min-w-fit text-9xl text-red-600 font-medium">
      {word}
    </div>
  )
}

export default FlashCard;