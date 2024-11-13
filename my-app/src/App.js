/*
  Fionn McCarthy
  g00414386@atu.ie 
  Data Representation and Querying Lab 2
*/

// import routing components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import app components
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Create from './components/Create';
import Read from './components/Read';

function App() {
  // displays a navigation bar that changes the component displayed based on the route
  // Route tag defines elements / Components to show

  

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;