import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Filter from './components/Filter';
import  './sass/filter.scss'
function App() {
  return (
    <Fragment>
      <Navbar/>
      <div className="section">
        <Sidebar/>
        <Filter/>
      </div>
    </Fragment>
    
  );
}

export default App;
