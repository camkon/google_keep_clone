import React from 'react';
import styled from 'styled-components';

const Pages = ({frag}) => {

  return (true && frag.map((i) => {
    if((i.title === undefined || i.title === '') && (i.text === undefined || i.text === '')) {
      return 0;
    }
    else 
    {
      return(
        <Page>
          <Title>{i.title}</Title>
          <Text>{i.text}</Text>
        </Page>
        )
      }
  }))
}

export default Pages;

const Page = styled.div`
  min-width: 15rem;
  max-width: 25rem;
  display: flex;
  align-content: flex-start;
  flex-flow: row wrap;
  max-height: 25rem;
  min-height: 10rem;
  padding: 0.7rem;
  margin: 1rem;
  border: 1px solid rgb(200,200,200);
  border-radius: 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
  color: rgb(40,40,40);
`

const Title = styled.p`
  min-height: 1.5rem;
  max-height: 3.5rem;
  display: flex;
  width: 100%;
  margin: 0;
  font-size: 1rem;
  font-family: monospace;
  letter-spacing: 2px;
  font-weight: 600;
`

const Text = styled.p`
  margin: 0.5rem 0 0 0;
  display:flex;
  word-wrap: break-word;
  font-size: 1.15rem;
  font-family: monospace;
  letter-spacing: 0.25px;
  overflow-y: hidden;
` 