import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Word {
  word: string;
  category: string;
  reads: number;
}

interface Props {
  category: string;
  words?: Array<Word>;
}

const CategorySection: React.FC<Props> = (props: Props) => {




  return (
    <div>
      <h2>{props.category}</h2>
      <ul>
        <li>word</li>
        <li>word</li>
      </ul>
    </div>
  )
}

export default CategorySection;