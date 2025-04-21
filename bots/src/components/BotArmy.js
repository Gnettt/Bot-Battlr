import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => onRelease(bot)}
          onDischarge={() => onDischarge(bot)}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;