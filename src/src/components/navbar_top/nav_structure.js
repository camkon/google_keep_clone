import React from 'react';
import ReactDom from 'react-dom';
import './nav_structure.css'

//images
import menu from './../../images/iconsBlack/menu.svg';
import keepIcon from './../../images/iconsBlack/google-keep.svg'


class Nav_structure extends React.Component {

  render() {
    return(
      <div className="top_nav">
        <div className="top_nav_grids" id="leftNav">
          <div id="menuIcon"><img src={menu}/></div>
          <div id="googleKeep"><img src={keepIcon}/></div>
          <div id="keepText"><p>Keep</p></div>
        </div>
        <div className="top_nav_grids" id="middleNav"></div>
        <div className="top_nav_grids" id="rightNav"></div>
      </div>
    )
  }
}

export default Nav_structure;