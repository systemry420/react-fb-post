import React from 'react';
import './App.css';
import Post from "./comps/Post"


function App() {
  const posts = [
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg?w=250",
      user: "abc",
      time: "2 hours ago",
      body: {text: "lorem ipsum", img: "my.JPG"},
      nblikes: 12,
      comments: 3,
    },
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg?w=250",
      user: "abc",
      time: "2 hours ago",
      body: {text: "lorem ipsum", img: "my.JPG"},
      nblikes: 12,
      comments: 3,
    },
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg?w=250",
      user: "def",
      time: "3 hours ago",
      body: {text: "lorem ipsum", img: "a.jpg"},
      nblikes: 32,
      comments: 5,
    }
  ]

  const mapped = posts.map((post, i) => {
      return (<Post key={i} {...post} />)
  })


  return (
    <div className="App">
        {mapped}
        <img src={posts[0].img} alt=""/>
    </div>
  );
}

export default App;
