import react from 'react';
import reactDom from 'react-dom';
import SideNavBar from './components/navbar_side/side_nav';
import Nav_structure from './components/navbar_top/nav_structure';

function App() {
  return(
    <div>
      <Nav_structure />
      <SideNavBar />
    </div>
  )
}

export default App;