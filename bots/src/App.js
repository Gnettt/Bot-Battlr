import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/BotArmy";
import SortBar from "./components/SortBar";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(err => console.error("Error fetching bots:", err));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE"
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  };

  const handleSort = (criterion) => {
  const sortedBots = [...bots].sort((a, b) => b[criterion] - a[criterion]);
  setBots(sortedBots);
};

  return (
    <div className="container text-center mt-4">
      <h1 className="mb-4"> Bot Battlr </h1>
     <SortBar handleSort={handleSort} />
     <YourBotArmy bots={army} onRelease={releaseBot} onDischarge={dischargeBot} />
     <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default App;
