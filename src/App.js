import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import LogOut from './components/LogOut/LogOut';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import './scss/App.scss';


function App() {
  const forImage = 60;
  const speed = 0.05;
  let positionX = 0, positionY = 0;
  let coordXprocent = 0, coordYprocent = 0
  let main = document.querySelector('.main')
  let image = document.querySelector(".header-main__picture")

  function mouseMovement(e) {
    main = document.querySelector('.main')
    image = document.querySelector(".header-main__picture")

    const parallaxWidth = main.offsetWidth
    const parallaxHeight = main.offsetHeight

    const coordX = e.pageX - parallaxWidth / 2
    const coordY = e.pageY - parallaxHeight / 2

    coordXprocent = coordX / parallaxWidth * 100
    coordYprocent = coordY / parallaxHeight * 100

    setMouseParallaxStyle()
  }

  function setMouseParallaxStyle() {
    const distX = coordXprocent - positionX
    const distY = coordYprocent - positionY

    positionX = positionX + (distX * speed)
    positionY = positionY + (distY * speed)

    try {
      image.style.cssText = `transform: translate(${positionX / forImage}%, ${positionY / forImage}%);`
    } catch {
      return
    }
  }

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
            <Route component={Profile} path='/profile' />
            <Route exact component={Dialogs} path='/messages' />
            <Route component={News} path='/news' />
            <Route component={Music} path='/music' />
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