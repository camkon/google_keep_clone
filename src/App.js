import react from 'react';
import reactDom from 'react-dom';
import Display_body from './components/Display_body';

//top-nav-bar style
import './style/css/App.css'

//side-nav-bar style
import './style/css/side_nav.css';


//top-nav-bar images
import menuIcon from './images/iconsBlack/menu.svg';
import googleKeep from './images/iconsBlack/google-keep.svg';
import searchIcon from './images/iconsBlack/search.svg';
import refreshIcon from './images/iconsBlack/refresh.svg';
import gridIcon from './images/iconsBlack/grid.svg';
import settingsIcon from './images/iconsBlack/settings.svg';
import googleAppsIcon from './images/iconsBlack/apps.svg';
import AccountIcon from './images/iconsBlack/account.svg';

//side-nav-bar images
import notesIcon from './images/iconsBlack/notes.svg'
import reminderIcon from './images/iconsBlack/reminder.svg'
import brushIcon from './images/iconsBlack/brush.svg'
import archiveIcon from './images/iconsBlack/archive.svg'
import deleteIcon from './images/iconsBlack/delete.svg'



class App extends react.Component {

  constructor() {
    super()
    this.state = {
      sideNavState: 'side-nav-shrink',
      animeClass: 'side-icon-label labels-hide nodisp',
      sideIconState: 'icon-back',
      searchBar: 'search-bar-clicked',
      selectedMenuOption: 'notesIcon',
    }
  }

  //TOP NAV FUNCTIONS

  //hamburger menu function
  //when clicked on menubutton on top-nav-bar, it checks for style class's state and change accordingly 
  stateCheck = (e) => {
    const x = this.state.sideNavState == 'side-nav-shrink' ? this.enterSideNav() : this.exitSideNav();
  }

  //searchbar style change on click function
  changeSearchBarState = () => {
    let a = this.state.searchBar == 'search-bar-not-clicked' ? 'search-bar-clicked' : 'search-bar-not-clicked';
    this.setState({
      searchBar: a,
    })    
  }


  //SIDE NAV FUNCTIONS

  //function to change the style class to STRETCH side nav when pointer exits the perimeter
  //when mouse enters the container, class is changed.
  //setState is used to change the state of the class name.
  enterSideNav = (event) => {
    this.setState({
      sideNavState: 'side-nav-stretch',
      animeClass: 'side-icon-label labels-show',
      sideIconState: 'icon-back-box',
    })
  }

  //changes the display of side-nav-labels to NONE with a time gap after exiting
  labelNoDisplay = () => {
    this.setState({
      animeClass: 'side-icon-label labels-hide nodisp',
    })
  }

  //function to change the style class to SHRINK side nav when pointer exits the perimeter
  exitSideNav = (event) => {
    this.setState({
      sideNavState: 'side-nav-shrink',
      animeClass: 'side-icon-label labels-hide',
      sideIconState: 'icon-back-round',
    })
    setTimeout(() => this.labelNoDisplay(), 300);
  }

  //this function runs when an option in the side nav is selcted. since one single option contains 3 components namely icon-div, icon-img, icon-label, thus the complexity
  //checks which specific part is selected and runs accordingly
  //checks if the targeted element has 'icon-selcted' id in it or not. if yes, does nothing.
  //else checks for the already selected element and removes the id from it and add it to the current option.
  iconSelectCheck = (e) => {
    let d = e.target.getAttribute('class')

    if(d == 'side-icons') {
      if(e.target.getAttribute('id') != null) console.log('this is already selected');
      else {
        let w = e.target.getAttribute('data-name');
        this.setState({selectedMenuOption: w})
        let selectIcon = () => {e.target.setAttribute('id','icon-selected')}
        this.checkForOtherIconSelection(selectIcon)
      }
    }
    else if(d == 'img') {
      if(e.target.parentNode.getAttribute('id') != null) console.log('this is already selected');
      else {
        let w = e.target.parentNode.getAttribute('data-name');
        this.setState({selectedMenuOption: w})
        let selectIcon = () => {e.target.parentNode.setAttribute('id','icon-selected')}
        this.checkForOtherIconSelection(selectIcon)
      }
    }
    else {
      if(e.target.parentNode.getAttribute('id') != null) console.log('this is already selected');
      else {
        let w = e.target.parentNode.getAttribute('data-name');
        this.setState({selectedMenuOption: w})
        let selectIcon = () => {e.target.parentNode.setAttribute('id','icon-selected')}
        this.checkForOtherIconSelection(selectIcon)
      }
    }
  }

  //checking for the already selected element and the removing the id from it.
  // adding the the 'icon-selected' id to the current event.target element.
  checkForOtherIconSelection = (x) => {
    let a = document.querySelectorAll('.side-icons')
    for(const i of a) {
      let b = i.getAttribute('data-name')
      let c = document.querySelector(`[data-name=${b}]`)
      if(c.getAttribute('id') == 'icon-selected') {
        c.removeAttribute('id');
        x();  
        break;
      }
    }
  }

//set the selecting fucntion as a parameter that passes in a fucntion

  render() {
    return(
      <div id='a'>
        <div className="top_nav">

          <div className="top_nav_grids" id="leftNav">
            <div data-name="menu-icon" onClick={this.stateCheck}>
            <img src={menuIcon}/></div>
            <div data-name="google-keep"><img src={googleKeep}/></div>
            <div data-name="keep-text"><p>Keep</p></div>
          </div>
          
          <div className="top_nav_grids" id="middleNav">
            <div className="searchBar" id={this.state.searchBar} onClick={this.changeSearchBarState}>
              <div data-name="search-icon"><img src={searchIcon}/></div>
              <input data-name="search-text" type="text" placeHolder="Search"/>
            </div>
          </div>
          
          <div className="top_nav_grids" id="rightNav">
            <div data-name="refresh-icon"><img src={refreshIcon}/></div>
            <div data-name="grid-icon"><img src={gridIcon}/></div>
            <div data-name="settings-icon"><img src={settingsIcon}/></div>
            <div data-name="googleApps-icon"><img src={googleAppsIcon}/></div>
            <div data-name="Account-icon"><img src={AccountIcon}/></div>
          </div>
        </div>


        {/* //side nav bar components */}
        <div 
          className="side-nav-container" 
          id={this.state.sideNavState} 
          onMouseEnter={this.enterSideNav}
          onMouseLeave={this.exitSideNav}
          onClick={this.iconSelectCheck}>

          <div className="plain-div-behind-side-nav" data-test={this.state.selectedMenuOption}></div>
          {/* {
            this.state.sideNavState == 'side-nav-stretch' && 
            <div className="plain-div-behind-side-nav" data-test={this.state.selectedMenuOption}></div>
          } */}

          <div className='side-icons' data-iconAnime={this.state.sideIconState} id='icon-selected' data-name="notesIcon">
            <img className='img' src={notesIcon}/>
            {/* {
              this.state.animeClass == 'side-icon-label labels-show' && <div className={this.state.animeClass}>Notes</div>
            } */}
            <div className={this.state.animeClass}>Notes</div>
          </div>

          <div className='side-icons' data-iconAnime={this.state.sideIconState} data-name="reminderIcon">
            <img className='img' data-name="reminderIcon" src={reminderIcon}/>
            <div className={this.state.animeClass}>Reminder</div>
          </div>
          
          <div className='side-icons' data-iconAnime={this.state.sideIconState} data-name="brushIcon">
            <img className='img' src={brushIcon}/>
            <div className={this.state.animeClass}>Edit</div>
          </div>
          
          <div className='side-icons' data-iconAnime={this.state.sideIconState}data-name="archiveIcon">
            <img className='img' src={archiveIcon}/>
            <div className={this.state.animeClass}>Archive</div>
          </div>
          
          <div className='side-icons' data-iconAnime={this.state.sideIconState} data-name="deleteIcon">
            <img className='img' src={deleteIcon}/>
            <div className={this.state.animeClass}>Trash</div>
          </div>      
        
        </div>

        <Display_body menu={this.state.selectedMenuOption}/>
      
      </div>
    )
  }
}

export default App;

