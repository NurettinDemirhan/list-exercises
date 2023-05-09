import React, { useState } from 'react';
import GithubUser from './GithubUser';

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [currentUsername, setCurrentUsername] = useState('');

  const handleInputChange = event => {
    setCurrentUsername(event.target.value);
  };

  const handleAddUser = () => {
    setUsernames([...usernames, currentUsername]);
    setCurrentUsername('');
  };

  return (
    <div>
      <h2>Github Users</h2>
      
      <div>
        {usernames.map(username => (
          <GithubUser key={username} username={username} />
        ))}
      </div>
      <div>
        <input type="text" value={currentUsername} onChange={handleInputChange} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
}

export default GithubUserList;