import React from 'react';
import './App.css';
import Post from "./comps/Post"


function App() {
  const posts = [
    {
      img: "a.jpg",
      user: "abc",
      time: "2 hours ago",
      body: {text: "lorem ipsum", img: "a.jpg"},
      likes: 12
    },
    {
      img: "a.jpg",
      user: "def",
      time: "3 hours ago",
      body: {text: "lorem ipsum", img: "a.jpg"},
      likes: 32
    }
  ]

  const mapped = posts.map((post, i) => {
      return (<Post key={i} {...post} />)
  })


  return (
    <div className="App">
        {mapped}
    </div>
  );
}

export default App;
