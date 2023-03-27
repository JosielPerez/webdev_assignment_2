import { useEffect, useState } from "react";
import "./App.css";
import SCard from "./components/SCard";

const cardImages = [
  { src: "/images/biggrin.png", matched: false },
  { src: "/images/blackout.png", matched: false },
  { src: "/images/frost.png", matched: false },
  { src: "/images/metal-facemask.png", matched: false },
  { src: "/images/punisher.png", matched: false },
  { src: "/images/whiteout.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState([]);
  const [choiceOne, setChoiceOne] = useState([null]);
  const [choiceTwo, setChoiceTwo] = useState([null]);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  const allPairsFound = () => {
    const matchedCards = cards.filter((card) => card.matched);
    return matchedCards.length === cardImages.length * 2;
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          const updatedCards = prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });

          return updatedCards;
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p className="turns">Turns: {turns}</p>
      {allPairsFound() && <p>Congratulations! You Found All Pairs!</p>}
    </div>
  );
}

export default App;
