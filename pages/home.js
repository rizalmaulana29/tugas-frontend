// pages/index.js
import React, { useState } from 'react';
import { simpleData } from '../data/data';
import '../styles/styles.css'; // Mengimpor file CSS

const Home = () => {
    const [data, setData] = useState(simpleData);
    const [sortOrder, setSortOrder] = useState('asc');
    const [filter, setFilter] = useState('');

    const sortData = (key) => {
        const sortedData = [...data].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return a[key] < b[key] ? 1 : -1;
            }
        });
        setData(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Home Page</h1>
            <input 
                type="text" 
                placeholder="Filter by name" 
                value={filter} 
                onChange={handleFilterChange}
                className="filter-input"
            />
            <table>
                <thead>
                    <tr>
                        <th onClick={() => sortData('name')}>Name</th>
                        <th onClick={() => sortData('age')}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
