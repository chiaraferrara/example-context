import React, { ReactNode, useState } from "react";
import { useFetch } from "./hooks/useTodoList";
import "./App.css";

function App() {
 
  const [dataPosts, loadingPosts, getDataPosts] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  ) as any;
  const [likes, setLikes] = useState([]) as any;

  if (!!dataPosts && loadingPosts) {
    return <div>Loading</div>;
  } else {
    return (
      <>
      <button onClick={() => getDataPosts()}>Fetch Post data</button>
        <div>
        <ul>
          {likes.map((id : any) => {
        const post = dataPosts.find((post : any) => post.id === id);
        return(
        <button 
        key={id} 
        onClick={() =>{
          const newLikes = likes.filter((like: any) => like !== id);
          setLikes(newLikes);
        }}>
          {post.title}
          </button>
          );
      })}
        </ul>
          <ul>
            {dataPosts.map((todo: any) => {                
                   return( 
                   <button 
                   key={todo.id}
                    onClick={() => {
                      setLikes([...likes, todo.id]);
                    }} disabled= {likes.includes(todo.id)}> {todo.title} 
                  </button>
            );
                   })}
          </ul>
        </div>
       </>
    );
  }
}

export default App;
