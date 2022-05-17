import './App.css';
import Application from './components/applicationPage'
import LogIn from './components/logIn'
import OnAlbums from './components/onAlbums'
import OnInfo from './components/onInfo'
import OnLogOut from './components/onLogOut'
import OnPosts from './components/onPosts'
import OnToDos from './components/onToDos'

import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'

function App() {
  const { url } = useRouteMatch();
  
  return (

    <Router>
        <Switch>

          <Route exact path="/"><Redirect to="/login"></Redirect></Route>

          <Route path="${url}/login" ><LogIn/></Route>

          <Route exact path="${url}/application"><Application /></Route>

          {/* <Route path="/application/albums"><OnAlbums /></Route> */}

          <Route path="${url}/application/info"><OnInfo /></Route>

          <Route path="${url}/application/logOut"><OnLogOut /></Route>

          <Route path="${url}/application/posts"><OnPosts /></Route>

          <Route path="${url}/application/toDos"><OnToDos /></Route>

        </Switch>
    </Router>
  );
}

export default App;
