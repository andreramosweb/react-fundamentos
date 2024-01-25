import React from "react";

export default function Post(props){
  return (
   <>
      <article>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </article>
      <br />
    </>
  );
}