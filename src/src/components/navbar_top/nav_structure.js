import react from 'react';
import reactDom from 'react-dom';

//top-nav-bar style
import './style/nav_structure.css'

//side-nav-bar style
import './style/side_nav.css';

//top-nav-bar images
import menuIcon from './../../images/iconsBlack/menu.svg';
import googleKeep from './../../images/iconsBlack/google-keep.svg';
import searchIcon from './../../images/iconsBlack/search.svg';
import refreshIcon from './../../images/iconsBlack/refresh.svg';
import gridIcon from './../../images/iconsBlack/grid.svg';
import settingsIcon from './../../images/iconsBlack/settings.svg';
import googleAppsIcon from './../../images/iconsBlack/apps.svg';
import AccountIcon from './../../images/iconsBlack/account.svg';

//side-nav-bar images
import bulbIcon from './../../images/iconsBlack/bulb.svg'
import reminderIcon from './../../images/iconsBlack/reminder.svg'
import brushIcon from './../../images/iconsBlack/brush.svg'
import archiveIcon from './../../images/iconsBlack/archive.svg'
import deleteIcon from './../../images/iconsBlack/delete.svg'


class Nav_structure extends react.Component {

  constructor(props) {
    super()
    this.state = {
      sideNavState: 'shrink',
      animeClass: 'sideText hide nodisp',
    }
  }

  //when mouse enters the container, class is changed.
  //setState is used to change the state of the class name.
  enters = () => {
    let x = this.state.sideNavState == 'shrink' ? 'stretch' : 'shrink';
    let y = this.state.animeClass == 'sideText hide nodisp' ? 'sideText show' : 'sideText hide';

    this.setState({
      sideNavState: x,
      animeClass: y,
    })
  }

  noDisplayLabel = () => {
    let y = this.state.animeClass == 'sideText show' ? 'sideText hide nodisp' : 'sideText show';
    this.setState({
      animeClass: y
    })
  }
  exits = () => {
    let x = this.state.sideNavState == 'stretch' ? 'shrink' : 'stretch';
    let y = this.state.animeClass == 'sideText show' ? 'sideText hide nodisp' : 'sideText show';
    this.setState({
      sideNavState: x,
      animeClass: y,
    })
  }


  render() {
    return(
      <div>
        <div className="top_nav">

          <div className="top_nav_grids" id="leftNav">
            <div id="menuIcon"><img src={menuIcon}/></div>
            <div id="googleKeep"><img src={googleKeep}/></div>
            <div id="keepText"><p>Keep</p></div>
          </div>
          
          <div className="top_nav_grids" id="middleNav">
            <div id="searchBar" className={this.state.searchBar} onClick={this.searchBarChange}>
              <div id="searchIcon"><img src={searchIcon}/></div>
              <input id="searchText" type="text" placeHolder="Search"/>
            </div>
          </div>
          
          <div className="top_nav_grids" id="rightNav">
            <div id="refreshIcon"><img src={refreshIcon}/></div>
            <div id="gridIcon"><img src={gridIcon}/></div>
            <div id="settingsIcon"><img src={settingsIcon}/></div>
            <div id="googleAppsIcon"><img src={googleAppsIcon}/></div>
            <div id="AccountIcon"><img src={AccountIcon}/></div>
          </div>
        </div>


        {/* //side nav bar components */}
        <div 
          className="sideNavContainer" 
          id={this.state.sideNavState} 
          onMouseEnter={this.enters} 
          onMouseLeave={this.exits}>

          <div className="con"></div>

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

export default Nav_structure;