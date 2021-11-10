import react from 'react';
import reactDom from 'react-dom';
import './side_nav.css'

//images used in side nav bar
import bulbIcon from './../../images/iconsBlack/bulb.svg'
import reminderIcon from './../../images/iconsBlack/reminder.svg'
import brushIcon from './../../images/iconsBlack/brush.svg'
import archiveIcon from './../../images/iconsBlack/archive.svg'
import deleteIcon from './../../images/iconsBlack/delete.svg'


function activeCheck() {
  const sideNavContainer = document.getElementById('sideNavContainer');
  sideNavContainer.childNodes.addEventListener('click',function activeIcon(e) {
    console.log(e.target)
    e.target.style.backgroundColor == 'white' ? e.target.style.backgroundColor = 'antiquewhite' : e.target.style.backgroundColor = 'white'
  })
}

function SideNavBar() {
  return(
    <div className="sideNavBar">
      <div id="sideNavContainer" onMouseEnter={activeCheck}>
        
        <div id="bulbIcon"><img src={bulbIcon}/></div>
        <div id="reminderIcon"><img src={reminderIcon}/></div>
        <div id="brushIcon"><img src={brushIcon}/></div>
        <div id="archiveIcon"><img src={archiveIcon}/></div>
        <div id="deleteIcon"><img src={deleteIcon}/></div>

      </div>
    </div>
  )
}

export default SideNavBar;