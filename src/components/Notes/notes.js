import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './notes.css';
import Pages from './page';

const Notes = () => {

  const [note_state, setNoteState] = useState('2.9rem');
  const [note_title, setNoteTitle] = useState('');
  const [note_text, setNoteText] = useState('');
  const [page_set, setPageSet] = useState([]);
  const [temp, setTemp] = useState([])


  //functions
  const changeNoteHeight = () => { setNoteState('8.5rem'); }

  //1
  const takeNoteTitle = (e) => {
    setNoteTitle(e.target.value);
  }

  //2
  const takeNoteText = e => {
    setNoteText(e.target.value)
  }


  const makeAPage = () => {
    var a = new Array();
    a.push([note_title,note_text]);
    console.log('5')
    if(a[0][0] === '' && a[0][1] === '') {
      console.log('5.1')
    }
    else {
      console.log('5.2')
      setPageSet(a[0]);
      setNoteTitle('');
      setNoteText('');
      setNoteState('2.9rem');
    }
  }

  useEffect(() => {
    console.log('2') //init
    setTemp(page_set)
  },[page_set])

  //3
  function noteHRed(e){
    console.log('4')
    let x = e.target.getAttribute('id')
    if(x === 'main-screen' || x === 'note-taker' || x === 'note-show') {
      setNoteState('2.9rem');
      makeAPage()
    }
  }

  //4
  useEffect(() => {
    console.log('3') //1
    document.querySelector(`[data-container="main-screen-container"]`).addEventListener('click', noteHRed)
    return () => { document.querySelector(`[data-container="main-screen-container"]`).removeEventListener('click',noteHRed) }
  },[note_state])

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

          {
            note_state === '8.5rem' && <NoteAdd
              id="note-add"
              className="note-add"
              onClick={makeAPage}>Add
            </NoteAdd>
          }
        </Note>
      </NoteTakeContainer>

      <NoteShowContainer id="note-show" contHeight={note_state} className="note-show-container">
        {true && <Pages frag={temp}/> }
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

const NoteAdd = styled.button``

const NoteShowContainer = styled.div`
  position: absolute;
  top: ${props => props.contHeight === '2.9rem' ? '5.9rem' : '11.5rem'};
  height: ${props => props.contHeight == '2.9rem' ? 'calc(100% - 5.9rem)' : 'calc(100% - 11.5rem)'}
`

