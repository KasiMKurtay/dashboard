import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <div className="grid-container">
     <Header />
     <Sidebar />
     <Main />
    </div>
  );
}

export default App;
