import { useState } from 'react'

import './App.css';
// ----------imports--------------
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// ------Page Imports----------------
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MySpots from './pages/MySpots'
import NewSpot from './pages/NewSpot'
import EditSpot from './pages/EditSpot'
import DeleteSpot from './pages/DeleteSpot'

// ------switch and Route import-----
import { Switch, Route, withRouter} from 'react-router-dom'

import { getUser, logout } from  './services/userService'
import { create } from './services/spotService';

function App(props) {
  // --------------component state------------------------
  const [ userState, setUserState ] = useState({ user: getUser()})

  // --------------Helper functions-----------------------
  
  // handleSignupOrLogin
  function handleSoL () {
    // place user into state using the setter function
    setUserState({ user: getUser() })
    //  programmatically route user to dashboard
    props.history.push('/dashboard')
  }

  function handleCreate () {
    create();
    //  route user back to their spots
    props.history.push('/')
  }

function handleLogout() {
  logout(); // this removes the token from localStorage
  setUserState({ user: null }) // set user to null
  props.history.push('/') // send user to homepage
}

  return (
    <div className="App">
    <Header user={userState.user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path ='/' render={props=>
          <HomePage/>
        }/>
        <Route exact path ='/dashboard' render={props=>
          <DashboardPage/>
        }/>
        <Route exact path ='/login' render={props=>
          <LoginPage handleSoL={handleSoL}/>
        }/>
        <Route exact path ='/signup' render={props=>
          <SignupPage handleSoL={handleSoL}/>
        }/> 
        <Route exact path ='/myspots' render={props=>
          <MySpots/>
        }/>
        <Route exact path ='/new' render={props=>
          <NewSpot handleCreate={handleCreate}/>
        }/>
        <Route exact path ='/edit' render={props=>
          <EditSpot/>
        }/>
        <Route exact path ='/delete' render={props=>
          <DeleteSpot/>
        }/>
      </Switch>
    <Footer/>
    </div>
  );
}

export default withRouter(App);
