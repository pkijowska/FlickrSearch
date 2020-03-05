import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: auto;
  width: 350px;
  margin: 25px;
  background-color: grey;
  display: flex;
  flex-direction: column;
`;

const Image = (props) => {
  return (
    <StyledWrapper>
      <img src={ props.url } alt={props.alt} />
      <div> By: {props.ownername} on {props.datetaken}.
      Tags: {props.tags.length === 0 ? "no tags associated with this picture" : props.tags.split(" ").slice(0, 5).join(", ") }</div>
      <a href={props.url} target="_blank">Click here to see the fullsize picture</a>
    </StyledWrapper>
    );
}

export default Image;
