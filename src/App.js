import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import { random } from "lodash"

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
const USER_INIT_QUERY = 2;

function App() {

  const [projectQuery, setProjectQuery] = useState(PROJECT_INIT_QUERY)
  const [taskQuery, setTaskQuery] = useState(TASK_INIT_QUERY)
  const [getUsers, setGetUser] = useState(USER_INIT_QUERY)
  const [projects, setProjects] = useState(null)
  const [tasks, setTasks] = useState(null)
  const [users, setUsers] = useState()

  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);


  useEffect(() =>{   
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then((res) => res.json())
      .then((data) => {
        const allQuotes = data.quotes;
        setQuotes(allQuotes);
        setSelectedQuoteIndex(Math.floor(Math.random()*allQuotes.length)); 
      })
      .catch((error) => console.log(error.message));
    }, [])


  function getSelectedQuote() {
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex];
  }
   
  function generateNewQuoteIndex() {
    if (!quotes.length) {
      return undefined;
    }
    return random(0, quotes.length - 1);
  }

  function assignNewQuoteIndex() {
    setSelectedQuoteIndex(generateNewQuoteIndex());
  }
    

  //get one specific user
  useEffect(() => {
    fetch(`/users/${getUsers}`)
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => console.log(err))
  }, [getUsers])

  //get all projects (from users/one specific user)
  useEffect(() => {
    fetch(`/projects/`)
    //fetch(`/projects/user/${projectQuery}`)
    .then((res) => res.json())
    .then((data) => setProjects(data))
    .catch((err) => console.log(err))
  }, [projectQuery])

  //get all tasks (from projects/one specific project)
  useEffect(() => {
      fetch(`/tasks/`)
    //fetch(`/tasks/project/${taskQuery}`)
			.then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err))
  }, [taskQuery]);
  


  return (
    <div className="App">
        <Switch>
          <Route path="/project/update/:id" 
          render={(props) => (
            <EditProject projects={projects} setProjects={projects} {...props} />
          )}/> 
          <Route path="/project/today" 
          render={(props) => (
            <ProjectDetail users={users} projects={projects} setTasks={setTasks} tasks={tasks} {...props} />
          )}/>  
          <Route path="/createProject" 
          render={(props) => (
            <CreateProject users={users} projects={projects} setProjects={setProjects} {...props} />
          )}/>
          <Route path="/login" 
          render={() => (
            <LoginPage />
          )}/> 
          <Route path="/register" 
          render={() => (
            <SignUp />
          )}/> 
           {
            getSelectedQuote() ? 
            <LandingPage path="/" selectedQuote={getSelectedQuote()} assignNewQuoteIndex={assignNewQuoteIndex} /> :
            null 
          }  
        </Switch>
          

    </div>
  );
}

export default App;
