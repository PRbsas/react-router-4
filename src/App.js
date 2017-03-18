import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
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

/*const App = (props) => (
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

export default App;*/

//path='/:a(\d+)/:b' http://localhost:3000/1234/hello
//path='/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)' http://localhost:3000/03-15-2017.reactrouter



//Render Catch-All Routes with Switch Component

/*const Links = () => 
	<nav>
		<Link to='/'>Home</Link>
		<Link to='/about'>About</Link>
		<Link to='/contact'>Contact</Link>
	</nav>

class App extends Component {
  render() {
    return (
      <Router>
	<div>
	  <Links />
	  <Switch>
	    <Route exact path='/' render={() => <h1>Home</h1>} />
	    <Route path='/about' render={() => <h1>About</h1>} />
	    <Route render={() => <h1>Page not Found</h1>} />
	  </Switch>
	</div>
      </Router>
    )
  }
}

export default App;*/



//Render Multiple Components for the same route

/*const Links = () => 
  <nav>
    <Link to='/home'>Home</Link>
    <Link to='/about'>About</Link>
  </nav>

const Header = () => (
  <div className='header'>
    <Route 
      path='/:page'
      render={({match}) => (
        <h1>{match.params.page} Header</h1>
      )} />
   </div>
)

const Content = () => (
  <div className='content'>
    <Route 
      path='/:page'
      render={({match}) => (
        <h1>{match.params.page} Content</h1>
      )} />
    </div> 
)

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Header />
      <Content />
    </div>
  </Router>
)
				
export default App;*/



//Render nested Routes

const Home = () => (<h1>Home</h1>)
const Projects = () => (
  <div>
    <h1>Projects</h1>
    <Link to='/projects/color'>Color</Link>
    <Link to='/projects/sound'>Sound</Link>
    <Link to='/projects/grid'>Grid</Link>
    <Route 
      path='/projects/:section'
      render={({match}) => <h2>{match.params.section}</h2>} />
  </div>
)

const App = (props) => (
  <Router>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Route exact path='/' component={Home} />
      <Route path='/projects' component={Projects} />
    </div>
  </Router>
)

export default App;
