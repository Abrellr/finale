import React from "react"
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


function App() {
  return (
    <div className="App">
      <main>
        <Switch>
        <Route path="/project/:id" 
          render={() => (
            <ProjectDetail />
          )}/> 
        <Route path="/createProject" 
          render={() => (
            <CreateProject />
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
