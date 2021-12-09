import react from 'react';
import reactDom from 'react-dom';
import './side_nav.css';


class SideText extends react.Component {

  constructor(props) {
    super()
    this.state = {
      animeClass: 'sideText display',
    }    
  }

  render() {
    return(
      <div className={this.state.animeClass}>
        <div className='sText'>Notes</div>
        <div className='sText'>Reminder</div>
        <div className='sText'>Edit</div>
        <div className='sText'>Archive</div>
        <div className='sText'>Trash</div>
      </div>
    )
  }
}


export default SideText;
