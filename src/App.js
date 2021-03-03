import { useState } from "react";
import Header from "./components/header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      tasks: [
        {
          id: 1,
          text: "Doctors Appointment",
          day: "Feb 5th at 2:30pm",
          reminder: true,
        },
        {
          id: 2,
          text: "Meeting at School",
          day: "Feb 6th at 1:30pm",
          reminder: true,
        },
        {
          id: 3,
          text: "Food Shopping",
          day: "Feb 5th at 2:30pm",
          reminder: false,
        },
      ],
    },
  ]);

  // DeleteTask

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  };

  return (
    <div className="container">
      <Header />
      {Tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Task To Show'}
    </div>
  );
}

export default App;
