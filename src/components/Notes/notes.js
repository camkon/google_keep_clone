import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './notes.css';
import notesIcon from './notes.svg';
import Pages from './page';

const Notes = () => {

  const [note_state, setNoteState] = useState('2.9rem');
  const [note_title, setNoteTitle] = useState('');
  const [note_text, setNoteText] = useState('');
  const [page_set, setPageSet] = useState([]);
  const [pageFlag, setPageFlag] = useState(false);
  const [noteFlag, setNoteFlag] = useState(true);

  //functions
  const changeNoteHeight = () => { setNoteState('8.5rem'); }

  //2..
  const takeNoteTitle = (e) => {
    setNoteTitle(e.target.value);
  }

  //2..
  const takeNoteText = e => {
    setNoteText(e.target.value)
  }

  //1
  useEffect(() => {
    document.querySelector(`[data-container="main-screen-container"]`).addEventListener('click', noteHRed)
    return () => { document.querySelector(`[data-container="main-screen-container"]`).removeEventListener('click',noteHRed) }
  },[])

  //3
  function noteHRed(e){
    let x = e.target.getAttribute('id')
    if(x === 'main-screen' || x === 'note-taker' || x === 'note-show' || x === 'note-flag') {
      setNoteState('2.9rem');
    }
  }

  //4
  useEffect(() => {
    if(note_title === '' && note_text === '') {
      return 0;
    }
    else {
      setPageSet([
        ...page_set,
        {title: note_title, text: note_text, completed:false} 
      ]);
      setNoteTitle('');
      setNoteText('');
    }
  },[note_state])

  //5
  useEffect(() => {
    let x = page_set.length
    if(x === 0) {
      console.log('note components empty')
    }
    else {
      setPageFlag(true);
      setNoteFlag(false)
    }
  },[page_set])
  

  return (
    <NotesCont className='notes-cont'>
      <NoteTakeContainer className="note-take-container" id="note-taker">
        <Note className="note" id="note" noteHeight={note_state} onClick={changeNoteHeight}>
          {
            note_state === '8.5rem' && <NoteTitle 
              className="note-title" 
              id="note-title"
              placeholder="Title"
              value={note_title}
              onChange={takeNoteTitle}
              />
          }
          <NoteTake 
            className="note-take" 
            type="text" 
            id="note-text"
            placeholder="Take a note..."
            value={note_text}
            onChange={takeNoteText}
            />
        </Note>
      </NoteTakeContainer>

      <NoteShowContainer id="note-show" contHeight={note_state} className="note-show-container">
        {pageFlag && <Pages frag={page_set}/> }
        {noteFlag && 
          <div id="note-flag">
            <img id="noteBg" src={notesIcon} alt="notes icon"></img>
            <p>Notes you add appear here</p>
          </div>
        }
      </NoteShowContainer>

    </NotesCont>
  )
}

export default Notes


//styled components

const NotesCont = styled.div``

const NoteTakeContainer = styled.div``

const Note = styled.div`
  height: ${props => props.noteHeight};
`
const NoteTitle = styled.input``

const NoteTake = styled.input``

const NoteShowContainer = styled.div`
  position: absolute;
  top: ${props => props.contHeight === '2.9rem' ? '5.9rem' : '11.5rem'};
  height: ${props => props.contHeight == '2.9rem' ? 'calc(100% - 5.9rem)' : 'calc(100% - 11.5rem)'}
`

