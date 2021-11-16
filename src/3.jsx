import React, { useState, useEffect } from "react";
const StageThree = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [userIdInput, setUserIdInput] = useState("");
  const fetchPosts = (userId) => {
    setLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts${
        userId ? `?userId=${userId}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => setPosts([]))
      .finally(() => setLoading(false));
  };
  const handleUserIdChange = (e) => {
    setUserIdInput(e.target.value);
  };
  const searchAction = () => {
    fetchPosts(userIdInput);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="input-section">
        <span>User ID:</span>
        <input value={userIdInput} onChange={handleUserIdChange} />
        <button onClick={searchAction}>Search</button>
      </div>
      <div className="post-container">
        {loading ? (
          <div className="loader">Loading</div>
        ) : posts.length ? (
          posts.map((post) => (
            <div key={post.id} className="post">
              {post.title}
            </div>
          ))
        ) : (
          <div className="not-found">No Posts Here</div>
        )}
      </div>
    </div>
  );
};

export default StageThree;
