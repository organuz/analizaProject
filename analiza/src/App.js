// App.js
import React, { useState } from 'react';
import BarChart from './components/graph';


const App = () => {
    // נתונים סטטיים
    const [data] = useState([
        { id: '1', courses: 5 },
        { id: '2', courses: 3 },
        { id: '3', courses: 8 },
        { id: '4', courses: 2 },
    ]);

    return (
        <div>
            <h1>נתוני קורסים</h1>
            <BarChart data={data} />
        </div>
    );
};

export default App;

