import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WordSelector from './WordSelector'

interface Word {
  word: string;
  category: string;
  reads: number;
}

interface Props {
  category: string;
  words?: Array<Word>;
}

const CategorySection: React.FC<Props> = ({category, words}) => {
  console.log(words);
  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {
          words?.map((word) => {
            return (<WordSelector word={word} />)
          })
        }
      </ul>
    </div>
  )
}

export default CategorySection;