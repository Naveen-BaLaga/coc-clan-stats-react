import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './TableData.css';

const TableData = () => {
  const { tableName } = useParams();
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(tableName);

        if (cachedData) {
          const { payload, updateTimestamp } = JSON.parse(cachedData);
          const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
          const currentTime = new Date().getTime();

          if (currentTime - updateTimestamp < oneDayInMilliseconds) {
            console.log('Data from cache!');
            setTableData(payload);
            return;
          }
        }

        const response = await fetch(`http://127.0.0.1:5000/get-tables?table-name=${tableName}`);
        const data = await response.json();

        if (data.status === 'Success') {
          console.log('Data from API!');
          setTableData(data.payload);

          // Cache the data
          const updateTimestamp = new Date().getTime();
          const cachedData = { payload: data.payload, updateTimestamp };
          localStorage.setItem(tableName, JSON.stringify(cachedData));
        } else {
          setError(data.error || 'Error fetching data');
        }
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, [tableName]);

  return (
    <div>
      <main className="page-content">
        {error ? (
          <p>{`${tableName}`}</p>
        ) : (
          <div>
            <p>{`${tableName}`}</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player Name</th>
                  <th>Total Multiplayer Battles Won</th>
                  <th>Previous Rank</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Rank}</td>
                    <td>{item['Player Name']}</td>
                    <td>{item['Total Multiplayer Battles Won']}</td>
                    <td>{item['Previous Rank']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <Link to="/tables" className="go-back-link">
          Go to Previous Page
        </Link>
      </main>
    </div>
  );
}

export default TableData;
