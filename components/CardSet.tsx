import React, {useState, useEffect} from "react";
import FlashCard from "./FlashCard";
import Router from "next/router";

const CardSet: React.FC = () => {

  const [words, setWords] = useState<[string, string, string, string, string]>(['jump', 'refrigerator', 'the', 'Mommy', 'Daddy'])

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    cardTimer();
  }, [])

  const cardTimer = () => {
    setTimeout(() => {
      setCurrentIndex(1);
    }, 2500)
    setTimeout(() => {
      setCurrentIndex(2);
    }, 5000)
    setTimeout(() => {
      setCurrentIndex(3);
    }, 7500)
    setTimeout(() => {
      setCurrentIndex(4);
    }, 10000)
    setTimeout(() => {
      Router.push('/home');
    }, 13500)
  }

  const card_container: React.CSSProperties = {
    width: '500vw',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    transition: 'transform 0.5s',
    transform: `translateX(-${currentIndex * 20}%)`
  }

  return (
    <div style={card_container}>
      {words.map((word, index) => {
        return <FlashCard key={index} word={word} />
      })}
    </div>
  )
}

export default CardSet;