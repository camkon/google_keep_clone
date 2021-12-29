import React from 'react';
import styled from 'styled-components';

const Pages = ({title,text}) => {
  return(
    <Page>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Page>
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