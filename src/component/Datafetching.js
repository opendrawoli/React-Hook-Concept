import React, { useState, useEffect } from "react";
import axios from "axios";

function Datafetching() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idfrombutton, setButtonClick] = useState(1);
  const ClickForTitle = () => {
    setButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
      .then(res => {
        console.log(res);
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idfrombutton]);

  return (
    <div>
      <ul>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type="button" onClick={ClickForTitle}>
          Fetch Data
        </button>
        <div>{posts.title}</div>
        {/* {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default Datafetching;
