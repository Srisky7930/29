import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import VideoPlayer from './components/VideoPlayer'
import Trending from './components/Trending'
import Gaming from './components/Gaming'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/videos/:id" component={VideoPlayer} />
      <Route exact path="/trending" component={Trending} />
      <Route exact path="/Gaming" component={Gaming} />
    </Switch>
  </>
)

export default App
