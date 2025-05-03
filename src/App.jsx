import React from "react";
import TaskInputContainer from "./components/TaskInputContainer";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      <Navbar />
      <TaskInputContainer />
      <TaskList />
    </div>
  );
};

export default App;
