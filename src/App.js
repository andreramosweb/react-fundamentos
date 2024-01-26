import React, { Fragment } from "react";

import Post from "./Post";
import Header from "./Header";


const posts = [
  {title: "Título post 1", subtitle : "Subtítulo post 01", likes : 20},
  {title: "Título post 2", subtitle : "Subtítulo post 02", likes : 30},
  {title: "Título post 3", subtitle : "Subtítulo post 03", likes : 10},
];


function App(){
  return (
   <> 
      <Header>
        <p>Essa é a prop children</p>
      </Header>

     
      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title : post.title,
            subtitle : post.subtitle
           }}
        />
      ))}
   </>
  )
}

export default App;