import { useState } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AllUsersContainer from './components/AllUsers/AllUsersContainer';
import Dialogs from './components/Dialogs/Dialogs';
import PersonalDialogContainer from './components/Dialogs/PersonalDialog/PersonalDialogContainer';
import Friends from './components/Friends/Friends';
import HeaderContainer from './components/Header/HeaderContainer';
import LogIn from './components/LogIn/LogIn';
import LogOut from './components/LogOut/LogOut';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import mouseMovement from './Parallax';
import './scss/App.scss';

function App(props) {

  let [burger, setBurger] = useState(false)
  
  const renderDialog = (store, id) => {
    return <PersonalDialogContainer store={store} match={id}/>
  }

  const renderProfile = (dispatch, posts) => {
    return <Profile dispatch={dispatch} posts={posts}/>
  }

  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className="App" onMouseMove={e => {
          if (window.location.href.includes('/profile')) {
            mouseMovement(e)
          }
        }}>
          <HeaderContainer burger={burger} setBurger={setBurger}/>
          <main className="main_content container">
            <Navbar />
            <div className="main_content-wrapper">
              <Route exact render={obj => {
                return <ProfileContainer match={props.state.auth.userDescription}/>
              }} path='/profile/' />
              <Route render={obj => {
                return <ProfileContainer match={obj.match.params.id}/>
              }} path='/profile/:id' />
              <Route exact render={() => <Dialogs message={props.state.dialogs} dispatch={props.store.dispatch}/>} path='/messages' />
              <Route path="/messages/:id" render={obj => renderDialog(props.store, obj.match.params.id, props.store.dispatch)} />
              <Route component={News} path='/news' />
              <Route component={Music} path='/music' />
              <Route render={() => <AllUsersContainer/>} path='/users' />
              <Route render={() => <Friends friends={props.state.friends} />} path='/friends' />
              <Route component={Settings} path='/settings' />
              <Route component={LogIn} path='/login' />
              <Route component={LogOut} path='/logout' />
            </div>
          </main>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App