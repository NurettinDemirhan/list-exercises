import React from 'react';
import useGithubUser from './UseGithubUser';

function GithubUser({ username }) {
  const { userData, loading } = useGithubUser(username);

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