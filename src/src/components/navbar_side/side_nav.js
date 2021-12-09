import react from 'react';
import reactDom from 'react-dom';
import './side_nav.css';
import SideText from './side_nav_functions';


//images used in side nav bar
import bulbIcon from './../../images/iconsBlack/bulb.svg'
import reminderIcon from './../../images/iconsBlack/reminder.svg'
import brushIcon from './../../images/iconsBlack/brush.svg'
import archiveIcon from './../../images/iconsBlack/archive.svg'
import deleteIcon from './../../images/iconsBlack/delete.svg'



class SideNavBar extends react.Component {

  constructor(props) {
    super()
    this.state = {
      sideNavState: 'shrink',
      animeClass: 'sideText hide',
    }
  }

  //when mouse enters the container, class is changed.
  //setState is used to change the state of the class name.
  enters = () => {
    let x = this.state.sideNavState == 'shrink' ? 'stretch' : 'shrink';
    let y = this.state.animeClass == 'sideText hide' ? 'sideText show' : 'sideText hide';

    this.setState({
      sideNavState: x,
      animeClass: y,
    })

    console.log(document.querySelector('sideText'));
  }
  exits = () => {
    let x = this.state.sideNavState == 'stretch' ? 'shrink' : 'stretch';
    let y = this.state.animeClass == 'sideText show' ? 'sideText hide' : 'sideText show';
    this.setState({
      sideNavState: x,
      animeClass: y,
    })
  }


  render() {
    return(
      <div>
        <div className="sideNavContainer" id={this.state.sideNavState} onMouseEnter={this.enters} onMouseLeave={this.exits}>
          {/* <SideText /> */}
          <div className="sideIcons" id="bulbIcon">
            <img src={bulbIcon}/>
            <div className={this.state.animeClass}>Notes</div>
          </div>

          <div className="sideIcons" id="reminderIcon">
            <img src={reminderIcon}/>
            <div className={this.state.animeClass}>Reminder</div>
          </div>
          
          <div className="sideIcons" id="brushIcon">
            <img src={brushIcon}/>
            <div className={this.state.animeClass}>Edit</div>
          </div>
          
          <div className="sideIcons" id="archiveIcon">
            <img src={archiveIcon}/>
            <div className={this.state.animeClass}>Archive</div>
          </div>
          
          <div className="sideIcons" id="deleteIcon">
            <img src={deleteIcon}/>
            <div className={this.state.animeClass}>Trash</div>
          </div>      
        
        </div>
      </div>
    )
  }
}

export default SideNavBar;



