import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import NavBar from './NavBar';

// Định nghĩa kiểu cho activity
interface Activity {
  id: number;
  title: string;
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([]); // Sử dụng kiểu dữ liệu Activity cho state

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <List>
          {activities.map((activity) => (  // Không cần khai báo lại kiểu cho activity ở đây
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
      </Container>
      
    </>
  )
}

export default App
