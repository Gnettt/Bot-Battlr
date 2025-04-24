import React from "react";

function BotCard({ bot, handleClick, onDischarge }) {
  return (
    <div className="card h-100 shadow-sm" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text text-muted">{bot.catchphrase}</p>
        <p className="card-text">
          <strong>Class:</strong> {bot.bot_class}<br />
          <strong>Health:</strong> {bot.health}<br />
          <strong>Damage:</strong> {bot.damage}<br />
          <strong>Armor:</strong> {bot.armor}
        </p>
        {onDischarge && (
          <button className="btn btn-danger btn-sm" onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot);
          }}>
            X
          </button>
        )}
      </div>
    </div>
  );
}


export default BotCard;
