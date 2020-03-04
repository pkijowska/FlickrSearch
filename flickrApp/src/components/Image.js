import React from 'react';

const Image = (props) => {
  return (
    <div>
      <img src={ props.url } width="150" height="150" alt={props.alt} />
      <div> By: {props.ownername} on {props.datetaken}.
      Tags: {props.tags.length === 0 ? "no tags associated with this picture" : props.tags.split(" ").slice(0, 5).join(", ") }</div>
      <a href={props.url} target="_blank">Click here to see the fullsize picture</a>
    </div>
    );
}

export default Image;
