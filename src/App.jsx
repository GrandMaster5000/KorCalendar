import React, { useState } from 'react';
import Calendar from './components/Calendar';

function App() {
  const [date, setDate] = useState(null)

  const handleChangeDate = date => setDate(date);

  return (
    <div>
      {date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}
     <Calendar
       onChange={handleChangeDate}
     />
    </div>
  );
}

export default App;
