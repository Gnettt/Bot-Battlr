import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div className="container my-4">
      <h2 className="text-center">All Bots</h2>
      <div className="row">
        {bots.map((bot) => (
          <div className="col-md-3 mb-4" key={bot.id}>
            <BotCard bot={bot} handleClick={() => onEnlist(bot)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;