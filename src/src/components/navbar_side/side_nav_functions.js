import react from 'react';
import reactDom from 'react-dom';
import './side_nav.css'

function SideText() {
  return(
    <div className="sideText">
      <div>Notes</div>
      <div>Reminder</div>
      <div>Edit</div>
      <div>Archive</div>
      <div>Trash</div>
    </div>
  );
}


export default SideText;
