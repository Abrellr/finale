import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

//import the styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import the components
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import CreateProject from './Pages/CreateProject';
import ProjectDetail from './Pages/ProjectDetail';
import SignUp from './components/SignUp'
import EditProject from './Pages/EditProject'

const PROJECT_INIT_QUERY = 2;
const TASK_INIT_QUERY = 20;

function App() {

  const [projectQuery, setProjectQuery] = useState(PROJECT_INIT_QUERY)
  const [taskQuery, setTaskQuery] = useState(TASK_INIT_QUERY)
  const [projects, setProjects] = useState(null)
  const [tasks, setTasks] = useState(null)
  const [updatedTasks, setUpdatedTasks] = useState(null)

  
  //get all projects from one specific user
  useEffect(() => {
    fetch(`/projects/user/${projectQuery}`)
    .then((res) => res.json())
    .then((data) => setProjects(data))
    .catch((err) => console.log(err))
  }, [])

  //get all tasks from one specific project_id
  useEffect(() => {
    fetch(`/tasks/project/${taskQuery}`)
			.then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err))
  }, []);
  
  const deleteTasksFromTable = (task_id) => {
    const updatedTasks = tasks.filter(item => item.task_id !== task_id)
    setUpdatedTasks({ tasks: updatedTasks})
  }

  return (
    <div className="App">
      <main>
        <Switch>
        <Route path="/project/:id" 
          render={(props) => (
            <ProjectDetail tasks={tasks}{...props} />
          )}/> 
        <Route path="/createProject" 
          render={(props) => (
            <CreateProject projects={projects}{...props} />
          )}/>
          <Route exact path="/project/update" 
          render={(props) => (
            <EditProject projects={projects}{...props} />
          )}/>   
          <Route path="/login" 
          render={() => (
            <LoginPage />
          )}/> 
          <Route path="/register" 
          render={() => (
            <SignUp />
          )}/>    
          <Route path="/" 
          render={() => (
            <LandingPage />
          )}/>    
        </Switch>
      </main>
    </div>
  );
}

export default App;
