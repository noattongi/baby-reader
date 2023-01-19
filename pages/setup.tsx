import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategorySection from '../components/setup/CategorySection';
import { set } from 'mongoose';

export default function Setup() {

  interface Word {
    word: string;
    category: string;
    reads: number;
  }

  const [objectWords, setObjectWords] = useState<Word[]>([]);
  const [possessionWords, setPossessionWords] = useState<Word[]>([]);
  const [foodWords, setFoodWords] = useState<Word[]>([]);
  const [animalWords, setAnimalWords] = useState<Word[]>([]);
  const [actionWords, setActionWords] = useState<Word[]>([]);
  const [didGetWords, setDidGetWords] = useState<boolean>(false);

  useEffect (() => {
    axios.get('http://127.0.0.1:3001/words')
    .then(({data}) => {
      let objects: Word[] = [];
      let possessions: Word[] = [];
      let foods: Word[] = [];
      let animals: Word[] = [];
      let actions: Word[] = [];
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
      setObjectWords(objects);
      setPossessionWords(possessions);
      setFoodWords(foods);
      setAnimalWords(animals);
      setActionWords(actions);
    })
    .then(() => {
      setDidGetWords(true);
    })
    .catch((err) => {
      console.error(err);
    })
  }, [])

  if (didGetWords) {
    return (
      <div>
        <h3>Here you get to add and delete words from your baby's database</h3>
        <CategorySection category='self'/>
        <CategorySection category='objects' words={objectWords}/>
        <CategorySection category='possessions' words={possessionWords}/>
        <CategorySection category='foods' words={foodWords}/>
        <CategorySection category='animals' words={animalWords}/>
        <CategorySection category='actions' words={actionWords}/>
      </div>
    )
  } else {
    return (
      <div>
        Loading.....
      </div>
    )
  }
}