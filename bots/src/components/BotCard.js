import React from "react";

function BotCard({ bot, handleClick, onDischarge }) {
  return (
    <div className="bot-card" handleClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>
      {onDischarge && (
        <button handleClick={(e) => {
         e.stopPropagation();
         onDischarge(bot);
        }}>x</button>
      )}
    </div>
  );
};

export default BotCard;
