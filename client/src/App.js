import './App.css';
import React from 'react';
import MainView from './views/MainView';
import DetailView from './views/DetailView';
import UpdateView from './views/UpdateView';
import {Router} from '@reach/router';


function App() {
  return (
    <div className="App">
      <Router>
        <MainView path="/" />
        <DetailView path="/:id" />
        <UpdateView path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
