import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

// Định nghĩa kiểu cho activity
interface Activity {
  id: number;
  title: string;
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([]); // Sử dụng kiểu dữ liệu Activity cho state

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((activity) => (  // Không cần khai báo lại kiểu cho activity ở đây
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
