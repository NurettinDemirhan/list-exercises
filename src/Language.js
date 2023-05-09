import React, { useState } from "react";


const LanguageContext = React.createContext();


const DisplayLanguage = () => {
    return (
      <LanguageContext.Consumer>
        {({ language }) => (
          <div>
            <h1>Selected Language: {language}</h1>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  };

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <LanguageContext.Provider value={{ language: selectedLanguage }}>
      <div>
        <label htmlFor="language-select">Select a language:</label>
        <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        <DisplayLanguage />
      </div>
    </LanguageContext.Provider>
  );
};

export default Language;