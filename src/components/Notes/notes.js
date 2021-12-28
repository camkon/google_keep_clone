import { continueStatement } from '@babel/types';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './notes.css';

const Notes = () => {

  const [note_state, setNoteState] = useState('2.9rem');
  const [note_title, setNoteTitle] = useState('');



  //functions
  const changeNoteHeight = () => { setNoteState('8.5rem'); }
  useEffect(() => {
    document.querySelector(`[data-container="main-screen-container"]`).addEventListener('click', (e) => {
      let x = e.target.getAttribute('id')
      if(x != 'note-title') {
        setNoteState('2.9rem')
      }
    })
  },[])

  const takeNoteTitle = (e) => {
    setNoteTitle(e.target.value);
    console.log(note_title);
  }



  return (
    <div>
      <NoteTakeContainer className="note-take-container">

        <Note className="note" noteHeight={note_state} onClick={changeNoteHeight}>
          {
            note_state === '8.5rem' && <NoteTitle 
              className="note-title" 
              id="note-title"
              placeholder="Title"
              value={note_title}
              onChange={takeNoteTitle}
              />
          }
          <NoteTake className="note-take" type="text" placeholder="Take a note..."/>

        </Note>

      </NoteTakeContainer>

    </div>
  )
}

export default Notes


//styled components

const NoteTakeContainer = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // border-bottom: 0.5px solid grey;
`
const Note = styled.div`
  // display:flex;
  // align-items: center;
  height: ${props => props.noteHeight};
  // width: 37rem;
  // padding: 0.5rem;
  // margin: 1.5rem 0;
  // border-radius: 0.5rem;
  // border: 0.8px double rgb(240,240,240);
  // box-shadow: 0 0.7px 3px 0px grey;
  // &:hover {cursor:text}
`
const NoteTitle = styled.input``

const NoteTake = styled.input`
  // // position: absolute;
  // // top: 0;
  // height: 2rem;
  // width: 20rem;
  // outline-style: none;
  // border: none;
  // border-radius: 0.5rem;
  // background-color: ;
`

