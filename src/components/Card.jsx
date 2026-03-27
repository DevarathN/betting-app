export default function Card({ value, onClick, revealed }) {
  return (
    <div className={`card ${revealed ? "flip" : ""}`} onClick={onClick}>
      <div className="card-inner">
        {/* Front */}
        <div className="card-front">?</div>

        {/* Back */}
        <div className="card-back">{value}</div>
      </div>
    </div>
  );
}
