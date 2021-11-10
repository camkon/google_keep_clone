import React from 'react';
import ReactDom from 'react-dom';
import './nav_structure.css'

//images used in the top nav bar
import menuIcon from './../../images/iconsBlack/menu.svg';
import googleKeep from './../../images/iconsBlack/google-keep.svg';
import searchIcon from './../../images/iconsBlack/search.svg';
import refreshIcon from './../../images/iconsBlack/refresh.svg';
import gridIcon from './../../images/iconsBlack/grid.svg';
import settingsIcon from './../../images/iconsBlack/settings.svg';
import googleAppsIcon from './../../images/iconsBlack/apps.svg';
import AccountIcon from './../../images/iconsBlack/account.svg';


//style transition when search bar is clicked
function searchbar() {
  var searchbox = document.getElementById('searchBar').style;
  searchbox.backgroundColor == 'rgb(243, 243, 243)' ? searchbox.backgroundColor = 'white' : searchbox.backgroundColor = 'rgb(243, 243, 243)';
  searchbox.boxShadow == 'none' ? searchbox.boxShadow = '0.01rem 0.05rem 0.1rem 0 rgb(200, 200, 200)' : searchbox.boxShadow = 'none';
}


class Nav_structure extends React.Component {

  render() {
    return(
      <div className="top_nav">

        <div className="top_nav_grids" id="leftNav">
          <div id="menuIcon"><img src={menuIcon}/></div>
          <div id="googleKeep"><img src={googleKeep}/></div>
          <div id="keepText"><p>Keep</p></div>
        </div>
        
        <div className="top_nav_grids" id="middleNav">
          <div id="searchBar" onClick={searchbar}>
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