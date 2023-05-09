import React, { useState, useEffect } from 'react';

function GithubUser({ username = "zeldox258" }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found for {username}</div>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Public Repos: {userData.public_repos}</p>
    </div>
  );
}

export default GithubUser;