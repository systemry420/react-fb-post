import React from 'react';
import './App.css';
import Post from "./comps/Post"


function App() {
  const posts = [
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg?w=250",
      user: "Lebanon",
      time: "2 hours ago",
      body: {
        text: "khareyte lma2soumi", 
        img: "https://scontent.fkye3-1.fna.fbcdn.net/v/t1.0-9/122538894_10158484274786223_252811418034882873_n.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9we0QxFkcpEAX_-tkcm&_nc_ht=scontent.fkye3-1.fna&oh=b9410efec431d5410934bf8bdf134bd9&oe=5FB91413"
      },
      nblikes: 12,
      comments: 3,
    },
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg?w=250",
      user: "abc",
      time: "3 hours ago",
      body: {
        text: "lorem ipsum", 
        // img: "https://scontent.fkye3-1.fna.fbcdn.net/v/t1.0-9/122538894_10158484274786223_252811418034882873_n.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9we0QxFkcpEAX_-tkcm&_nc_ht=scontent.fkye3-1.fna&oh=b9410efec431d5410934bf8bdf134bd9&oe=5FB91413"
      },
      nblikes: 25,
      comments: 13,
    },
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg?w=250",
      user: "def",
      time: "5 hours ago",
      body: {
        text: "lorem ipsum", 
        img: "a.jpg"
      },
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
    </div>
  );
}

export default App;
