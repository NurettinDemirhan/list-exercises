import React, { useState } from 'react';
import useGithubUser from './UseGithubUser';

function GithubUser() {
  const [username, setUsername] = useState('');
  const { userData, loading, error, fetchUserData } = useGithubUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUserData(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Github username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <button type="submit">Fetch user data</button>
      </form>

      {loading && <div>Loading...</div>}

      {error && (
        <div>
          Error fetching user data: {error.message}
        </div>
      )}

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default GithubUser;