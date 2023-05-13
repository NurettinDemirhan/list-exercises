import { useState, useEffect } from 'react';

function useGithubUser(username = "zeldox258") {
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

  return { userData, loading };
}

export default useGithubUser;