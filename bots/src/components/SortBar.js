import React from "react";

function SortBar({ handleSort }) {
  return (
    <div className="my-3">
  <h4>Sort Bots By:</h4>
  <div className="btn-group" role="group">
    <button className="btn btn-outline-secondary" onClick={() => handleSort("health")}>Health</button>
    <button className="btn btn-outline-secondary" onClick={() => handleSort("damage")}>Damage</button>
    <button className="btn btn-outline-secondary" onClick={() => handleSort("armor")}>Armor</button>
  </div>
</div>
  );
}

export default SortBar;
