import React, { Fragment } from "react";

import Post from "./Post";
import Header from "./Header";


function App(){
  return (
   <> 
      <Header>
        <p>Essa é a prop children</p>
      </Header>

      <Post 
        title="Título post 01"
        subtitle="Subtítulo post 01"  
      />

      <Post 
        title="Título post 02"
        subtitle="Subtítulo post 02"  
      />

   </>
  )
}

export default App;