import react from 'react';
import reactDom from 'react-dom';

import SideNavBar from './components/navbar_side/side_nav';
import Nav_structure from './components/navbar_top/nav_structure';

// style
import './components/navbar_side/side_nav.css';
import './components/navbar_top/nav_structure.css';

function App() {
  return(
    <div>
      <Nav_structure />
      <SideNavBar />
    </div>
  )
}

export default App;

