import React from 'react';
import CharCreation from './components/charCreation';
import Header from './components/header';


function App() {
  return (<div>
    <React.StrictMode>
      <Header />
      <CharCreation />
    </React.StrictMode>
  </div>
  );
}

export default App;
