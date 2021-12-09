import react from 'react';
import reactDom from 'react-dom';

//top nav bar 

//images used in the top nav bar
import menuIcon from './../../images/iconsBlack/menu.svg';
import googleKeep from './../../images/iconsBlack/google-keep.svg';
import searchIcon from './../../images/iconsBlack/search.svg';
import refreshIcon from './../../images/iconsBlack/refresh.svg';
import gridIcon from './../../images/iconsBlack/grid.svg';
import settingsIcon from './../../images/iconsBlack/settings.svg';
import googleAppsIcon from './../../images/iconsBlack/apps.svg';
import AccountIcon from './../../images/iconsBlack/account.svg';



class Nav_structure extends react.Component {

  constructor(props) {
    super()
    this.state = {
      searchBar: 'clicked',
    }
  }

  searchBarChange = () => {
    this.setState({
      searchBar: 'unClicked',
    })
  }



  render() {
    return(
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
    )
  }
}

export default Nav_structure;