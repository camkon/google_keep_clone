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
      sideNavState: 'side-nav-shrink',
      animeClass: 'side-icon-label labels-hide nodisp',
      sideIconState: 'icon-back-box',
    }
  }

  //when clicked on menubutton on top-nav-bar, it checks for style class's state and change accordingly 
  stateCheck = () => {
    let x = this.state.sideNavState == 'side-nav-stretch' ? 'side-nav-shrink' : 'side-nav-stretch';
    let y = this.state.animeClass == 'side-icon-label labels-show' ? 'side-icon-label labels-hide nodisp' : 'side-icon-label labels-show';
    let z = this.state.sideIconState == 'icon-back-round' ? 'icon-back-box' : 'icon-back-round';
    this.setState({
      sideNavState: x,
      animeClass: y,
      sideIconState: z,
    })
  }

  //function to change the style class to STRETCH side nav when pointer exits the perimeter
  //when mouse enters the container, class is changed.
  //setState is used to change the state of the class name.
  enters = (event) => {
    this.setState({
      sideNavState: 'side-nav-stretch',
      animeClass: 'side-icon-label labels-show',
      sideIconState: 'icon-back-box',
    })
    console.log(document.querySelector('.side-icons').getAttribute('id'));
  }

  //changes the display of side-nav-labels to NONE with a time gap after exiting
  noDisplayLabel = () => {
    this.setState({
      animeClass: 'side-icon-label labels-hide nodisp',
    })
  }

  //function to change the style class to SHRINK side nav when pointer exits the perimeter
  exits = () => {
    this.setState({
      sideNavState: 'side-nav-shrink',
      animeClass: 'side-icon-label labels-hide',
      sideIconState: 'icon-back-round',
    })
    setTimeout(() => this.noDisplayLabel(), 300);
  }











  render() {
    return(
      <div>
        <div className="top_nav">

          <div className="top_nav_grids" id="leftNav">
            <div id="menuIcon"
              onClick={this.stateCheck}
            ><img src={menuIcon}/></div>
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
          className="side-nav-container" 
          id={this.state.sideNavState} 
          onMouseEnter={this.enters} 
          onMouseLeave={this.exits}>

          <div className="plain-div-behind-side-nav"></div>


          <div className='side-icons' data-iconAnime={this.state.sideIconState} id data-name="bulbIcon">
            <img src={bulbIcon}/>
            <div className={this.state.animeClass}>Notes</div>
          </div>

          <div className='side-icons' data-iconAnime={this.state.sideIconState} data-name="reminderIcon">
            <img src={reminderIcon}/>
            <div className={this.state.animeClass}>Reminder</div>
          </div>
          
          <div className='side-icons' data-iconAnime={this.state.sideIconState} data-name="brushIcon">
            <img src={brushIcon}/>
            <div className={this.state.animeClass}>Edit</div>
          </div>
          
          <div className='side-icons' data-iconAnime={this.state.sideIconState}data-name="archiveIcon">
            <img src={archiveIcon}/>
            <div className={this.state.animeClass}>Archive</div>
          </div>
          
          <div className='side-icons' data-iconAnime={this.state.sideIconState} data-name="deleteIcon">
            <img src={deleteIcon}/>
            <div className={this.state.animeClass}>Trash</div>
          </div>      
        
        </div>
      </div>
    )
  }
}

export default Nav_structure;