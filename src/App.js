import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

//Style Active Link with NavLink

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

//Add Basic Routes

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



// Use URL Parameters

/*const App = () => (
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

// http://localhost:3000/react-router = page:react subpage:router*/


//Use RegEx with Routes

const App = (props) => (
  <Router>
    <div>
      <Route 
				path='/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)' 
				render={({match}) => (
				<h1>
					ParamA: {match.params.a}<br />
					ParamB: {match.params.b}
				</h1>
			)} />
    </div>
  </Router>
);

export default App;

//path='/:a(\d+)/:b' http://localhost:3000/1234/hello
//path='/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)' http://localhost:3000/03-15-2017.reactrouter