import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './notes.css';
import Pages from './page';

const Notes = () => {

  const [note_state, setNoteState] = useState('2.9rem');
  const [note_title, setNoteTitle] = useState('');
  const [note_text, setNoteText] = useState('');
  const [page_set, setPageSet] = useState([]);



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

  //3
  useEffect(() => {
    document.querySelector(`[data-container="main-screen-container"]`).addEventListener('click', (e) => {
      let x = e.target.getAttribute('id')
      if(x === 'main-screen' || x === 'note-taker' || x === 'note-show') {
        setNoteState('2.9rem');
      }
    })
  },[])

  //4
  const makeAPage = () => {
    let a = new Array();
    a.push([note_title,note_text]);
    setPageSet(a[0]);
  }


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

      {/* <NoteShowContainer id="note-show" contHeight={note_state} className="note-show-container">
      {
        page_set != null && <Pages title={page_set[0]} text={page_set[1]}/>
      }
      </NoteShowContainer> */}

      <Pages
        id="note-show"
        className="note-show-container"
        contHeight={note_state}
        title={page_set[0]}
        text={page_set[1]}
      />

    </NotesCont>
  )
}

export default Notes


//styled components

const NotesCont = styled.div`
`

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
const NoteAdd = styled.button``

{/* const NoteShowContainer = styled.div`
  position: absolute;
  top: ${props => props.contHeight === '2.9rem' ? '5.9rem' : '11.5rem'};
  height: ${props => props.contHeight == '2.9rem' ? 'calc(100% - 5.9rem)' : 'calc(100% - 11.5rem)'}
` */}

