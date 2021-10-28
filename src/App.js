import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import LogOut from './components/LogOut/LogOut';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import mouseMovement from './Parallax';
import './scss/App.scss';

function App(props) {
  console.log(props)
  return (
    <BrowserRouter>
      <div className="App" onMouseMove={e => {
        if (window.location.href.includes('/profile')) {
          mouseMovement(e)
        }
      }}>
        <Header />
        <main className="main_content container">
          <Navbar />
          <div className="main_content-wrapper">
            <Route component={() => <Profile dispatch={props.store.dispatch} posts={props.state.posts} rerenderEntireTree={props.rerenderEntireTree}/>} path='/profile' />
            <Route exact component={() => <Dialogs message={props.state.dialogs} />} path='/messages' />
            <Route component={News} path='/news' />
            <Route component={Music} path='/music' />
            <Route component={() => <Friends friends={props.state.friends} />} path='/friends' />
            <Route component={Settings} path='/settings' />
            <Route component={LogIn} path='/login' />
            <Route component={LogOut} path='/logout' />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App