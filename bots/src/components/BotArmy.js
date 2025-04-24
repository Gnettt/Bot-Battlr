import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div className="container my-4">
      <h2 className="text-center">Your Bot Army</h2>
      <div className="row">
        {bots.map((bot) => (
          <div className="col-md-3 mb-4" key={bot.id}>
            <BotCard
              bot={bot}
              handleClick={() => onRelease(bot)}
              onDischarge={() => onDischarge(bot)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default YourBotArmy;