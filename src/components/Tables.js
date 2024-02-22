import React from 'react';
import { Link } from 'react-router-dom';
import './Tables.css';

const Tables = () => {
  return (
    <div>
      <main className="page-content">
        <h2 className="tables-heading">List of Tables</h2>
        <div className="tables-list">
          <ul>
          <Link to="/tableData/Highest Multiplayer Battles Won"><div className="table-entry">Highest Multiplayer Battles Won</div></Link>
          <Link to="/tableData/Highest Barbarian King Level"><div className="table-entry">Highest Barbarian King Level</div></Link>
          <Link to="/tableData/Highest Archer Queen Level"><div className="table-entry">Highest Archer Queen Level</div></Link>

          </ul>
        </div>
      </main>
    </div>
  );
}

export default Tables;
