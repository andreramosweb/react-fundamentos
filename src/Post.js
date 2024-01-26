import React from "react";
import PropTypes from 'prop-types';

export default function Post(props){
  return (
   <>
      <article>
        <h2>{props.post.title}</h2>
        <p>{props.post.subtitle}</p>
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  title : PropTypes.string,
  subtitle : PropTypes.string
}