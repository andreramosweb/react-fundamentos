import React from "react";

export default function Header(props){
  return (
    <>
      <h1>Título do Blog</h1>
      <h1>Subtítulo</h1>
      {props.children}
      <hr/>
    </>
  );
}