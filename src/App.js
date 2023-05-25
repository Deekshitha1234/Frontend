// import useTheme from './hooks/useTheme';
import React,{useState} from 'react';
import Hobby from './components/Hobby';
import Language from './components/Language';
import "./App.css"
const App = () => {

  return (
    <div className="App">
      <Hobby />
      <Language/>
    </div>
  );
};
export default App;
