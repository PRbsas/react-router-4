import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

/*const isActiveFn = (match, location) => {
	console.log(match, location)
	return match
}


const Links = () => (
  <nav>
    <NavLink exact activeClassName='active' to='/'>Home</NavLink>
    <NavLink activeStyle={{color: '#0f0'}} to={{pathname: '/about'}}>About</NavLink>
    <NavLink 
			isActive={isActiveFn}
			activeClassName='active'
			replace to='/contact'>Contact</NavLink>
  </nav>
)				

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path='/' render={() => <h1>Home</h1>} />
      <Route path='/about' render={() => <h1>About</h1>} />
      <Route path='/contact' render={() => <h1>Contact</h1>} />
    </div>
  </Router>
);

export default App;*/

const App = () => (
  <Router>
    <div>
      <Route path='/:page?-:subpage?' render={({match}) => (
				<h1>
					Page: {match.params.page || 'Home'}<br />
					Subpage: {match.params.subpage}
				</h1>
			)} />

    </div>
  </Router>
);

export default App;

// http://localhost:3000/react-router = page:react subpage:router