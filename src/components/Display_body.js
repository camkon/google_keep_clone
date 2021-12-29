import React, { Component } from 'react';

import '../style/css/display_body.css'

//sub components imports
import Notes from './Notes/notes'
import Reminder from './Reminder';
import Edit from './Edit';
import Archive from './Archive';
import Delete from './Delete';

export class DisplayBody extends Component {

  render() {

    return (
      <div data-container="main-screen-container" id="main-screen">
        { this.props.menu === 'notesIcon' && <Notes/> }
        { this.props.menu === 'reminderIcon' && <Reminder/> }
        { this.props.menu === 'brushIcon' && <Edit/> }
        { this.props.menu === 'archiveIcon' && <Archive/> }
        { this.props.menu === 'deleteIcon' && <Delete/> }
      </div>
    )
  }
}

export default DisplayBody
