import React, {useEffect} from 'react';

import '../style/css/display_body.css'

//sub components imports
import Notes from './Notes/notes'
import Reminder from './Reminder';
import Edit from './Edit';
import Archive from './Archive';
import Delete from './Delete';

const DisplayBody = ({menu}) => {

  return (
    <div data-container="main-screen-container" id="main-screen">
      { menu === 'notesIcon' && <Notes/> }
      { menu === 'reminderIcon' && <Reminder/> }
      { menu === 'brushIcon' && <Edit/> }
      { menu === 'archiveIcon' && <Archive/> }
      { menu === 'deleteIcon' && <Delete/> }
    </div>
  )
}


export default DisplayBody
