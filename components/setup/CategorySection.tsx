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
    <div style={section}>
      <h2 style={section_header}>{category}</h2>
      <ul style={section_words}>
        {
          words?.map((word) => {
            return (<WordSelector word={word} />)
          })
        }
        <div>
          <input type='text' style={input_box}/>
          <button>Add</button>
        </div>
      </ul>
    </div>
  )
}

const section: React.CSSProperties = {
  paddingTop: '30px',
}

const section_header: React.CSSProperties = {
  fontWeight: 'bold',
}

const section_words: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
}

const input_box: React.CSSProperties = {
  borderStyle: 'solid',
  borderColor: 'black',
  borderWidth: '1px',
}

export default CategorySection;