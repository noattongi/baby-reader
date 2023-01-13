import React, {useState} from 'react';
import axios from 'axios';
import CategorySection from '../components/setup/CategorySection';

export default function Setup() {

  interface Word {
    word: string;
    category: string;
    reads: number;
  }

  var objects: Array<Word> = [];
  var possessions: Array<Word> = [];
  var foods: Array<Word> = [];
  var animals: Array<Word> = [];
  var actions: Array<Word> = [];

  axios.get('http://127.0.0.1:3001/words')
  .then(({data}) => {
    for (let i of data) {
      if (i.category === 'object') {
        objects.push(i);
      }
      else if (i.category === 'possession') {
        possessions.push(i);
      }
      else if (i.category === 'food') {
        foods.push(i);
      }
      else if (i.category === 'animal') {
        animals.push(i);
      }
      else if (i.category === 'action') {
        actions.push(i);
      }
    }
  })

  return (
    <div>
      <h3>Here you get to add and delete words from your baby's database</h3>
      <CategorySection category='self'/>
      <CategorySection category='objects' words={objects}/>
      <CategorySection category='possessions' words={possessions}/>
      <CategorySection category='foods' words={foods}/>
      <CategorySection category='animals' words={animals}/>
      <CategorySection category='actions' words={animals}/>
    </div>
  )
}