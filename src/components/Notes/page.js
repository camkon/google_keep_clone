import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const PageFrag = ({frag_title,frag_text}) => {
  return(
    <Page>
      <Title>{frag_title}</Title>
      <Text>{frag_text}</Text>
    </Page>
  )
}

const Pages = ({title,text,contHeight}) => {

  const [all_notes, setAllNotes] = useState([]);
  const temp = [];
  const coll = [];

  useEffect(() => {
    temp.push([title,text])
    setAllNotes(temp);
    console.log('wtf',all_notes)
  },[title])

  useEffect(() => {
    coll.push(all_notes[0]);
    temp.pop();
  },[all_notes])


  return(
    <NoteShowContainer contH={contHeight}>
      {
        all_notes != null && coll.map( i => {
          return <PageFrag frag_title={i[0][0]} frag_text={i[0][1]} />
        })
      }
    </NoteShowContainer>
  )

}

export default Pages;

const Page = styled.div`
  min-width: 15rem;
  max-width: 20rem;
  height: 10rem;
  padding: 0rem 0.7rem;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
  color: black;
`

const Title = styled.p`
  min-height: 1.5rem;
  font-size: 1rem;
  font-family: roboto;
  letter-spacing: 2px;
  font-weight: 600;
`

const Text = styled.p`
  word-wrap: break-word;
  font-size: 1rem;
  font-family: roboto;
  letter-spacing: 0.3px;
  overflow-y: hidden;
`
const NoteShowContainer = styled.div`
  position: absolute;
  top: ${props => props.contH === '2.9rem' ? '5.9rem' : '11.5rem'};
  height: ${props => props.contH == '2.9rem' ? 'calc(100% - 5.9rem)' : 'calc(100% - 11.5rem)'}
`