import {Routes,Route} from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';



function App() {
  return (
    <>
    <Routes>
      <Route path="/react-portfolio2" element = {<Layout/>}>
      <Route path = "home" element={<Home/>}/>
      <Route path="about" element= {< About/>}/>
      <Route path="contact" element= {< Contact/>}/>
      <Route path="projects" element= {< Projects/>}/>
      </Route>
    </Routes>
    </>

  );
}

export default App;
