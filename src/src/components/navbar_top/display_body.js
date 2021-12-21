import React, { Component } from 'react';
import styled from 'styled-components';

import './style/display_body.css'

//sub components imports
import Bulb from '../main_functions/bulb'
import Reminder from '../main_functions/reminder';
import Edit from '../main_functions/edit';
import Archive from '../main_functions/archive';
import Delete from '../main_functions/delete';



// const Main_Screen_Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   left: 5rem;
//   top: 0rem;
//   height: 100%;
//   width: calc(100% - 5rem);
//   background-color: #d1d1d1;
//   z-index: 6;
// `;


export class Display_body extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div data-container="main-screen-container">
        { this.props.menu == 'bulbIcon' && <Bulb/> }
        { this.props.menu == 'reminderIcon' && <Reminder/> }
        { this.props.menu == 'brushIcon' && <Edit/> }
        { this.props.menu == 'archiveIcon' && <Archive/> }
        { this.props.menu == 'deleteIcon' && <Delete/> }
      </div>
    )
  }
}

export default Display_body
