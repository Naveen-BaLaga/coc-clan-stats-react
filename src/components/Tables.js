import React from 'react';
import './Tables.css';

const Tables = () => {
  return (
    <div>
      <main className="page-content">
        <h2 className="tables-heading">List of Tables</h2>
        <div className="tables-list">
          <ul>
            <div className="table-entry">Highest Multiplayer Battles Won</div>
            <div className="table-entry">Highest Barbarian King Level</div>
            <div className="table-entry">Highest Archer Queen Level</div>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Tables;
