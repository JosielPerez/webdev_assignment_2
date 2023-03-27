import "./SCard.css";

export default function SCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/images/rust.png"
          onClick={handleClick}
          alt="cover"
        />
      </div>
    </div>
  );
}