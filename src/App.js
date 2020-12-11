// third party
import { BrowserRouter, Route } from 'react-router-dom'

// your own components
import Home from './Components/Home';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import SkillDetails from './Components/SkillDetails'
import Nav from './Components/Nav'
import Weather from './Components/pages/Weather'

// style
import './App.css';

function App() {

  const skillsList = [
    {
      name: 'Javascript',
      id: 1,
      description: "I'm decent"
    },
    {
      name: 'Node.js',
      id: 2,
      description: 'Working on it'
    },
    {
      name: 'React',
      id: 3,
      description: 'Yeah...'
    },
  ]

  return (
    <BrowserRouter>
    <div className="App">
      <Nav />

      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route 
        exact
        path="/procedures" 
        render={() => { return <Skills skillsList={skillsList} />}} 
      />
      <Route 
        path="/skills/:id" 
        render={(routeProps) => {
          const id = routeProps.match.params.id
          const targetSkill = skillsList.find((p) => p.id === parseInt(id))
          return <SkillDetails skill={targetSkill} />
        }} 
      />
      <Route path="/weather" component={Weather}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
