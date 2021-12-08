import react from 'react';
import reactDom from 'react-dom';
import './side_nav.css';

//images used in side nav bar
import bulbIcon from './../../images/iconsBlack/bulb.svg'
import reminderIcon from './../../images/iconsBlack/reminder.svg'
import brushIcon from './../../images/iconsBlack/brush.svg'
import archiveIcon from './../../images/iconsBlack/archive.svg'
import deleteIcon from './../../images/iconsBlack/delete.svg'



class SideNavBar extends reactDom.Component {

  constructor(props) {
    super(props)
    this.state = {
      stretchState: 'stretched',
    }
  }

  enters = () => {
    console.log('entered');
  }

  exits = () => {
    console.log('exits');
  }

  render() {
    return(
      <div>
        <div id="sideNavContainer" className={this.state.stretchState} onMouseEnter={this.enters} onMouseLeave={this.exits}>
          <div className="sideIcons" id="bulbIcon"><img src={bulbIcon}/></div>
          <div className="sideIcons" id="reminderIcon"><img src={reminderIcon}/></div>
          <div className="sideIcons" id="brushIcon"><img src={brushIcon}/></div>
          <div className="sideIcons" id="archiveIcon"><img src={archiveIcon}/></div>
          <div className="sideIcons" id="deleteIcon"><img src={deleteIcon}/></div>      
        </div>
      </div>
    )
  }
}

export default SideNavBar;



