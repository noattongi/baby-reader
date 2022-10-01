import React, {useState, useEffect} from "react";
import FlashCard from "./FlashCard";

const CardSet: React.FC = () => {

  const [words, setWords] = useState<[string, string, string, string, string]>(['jump', 'refrigerator', 'the', 'Mommy', 'Daddy'])
  const [currentWord, setCurrentWord] = useState<string>('jump');

  useEffect(() => {
    cardTimer();
  }, [])

  const cardTimer = () => {
    var timerCount = 0;
    for (let word of words) {
      setTimeout(() => {
        setCurrentWord(word);
      }, timerCount)
      timerCount += 2500
    }

  }

  return (
    <>
      <FlashCard word={currentWord} />
    </>
  )
}

export default CardSet;