import "./SCard.css";
import Rust from "../assets/rust.png";

export default function SCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={Rust} onClick={handleClick} alt="cover" />
      </div>
    </div>
  );
}
