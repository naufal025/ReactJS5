import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
      

      
        <Link to="/">Beranda</Link> |
        <Link to="/protokol">Protokol</Link> |
        <Link to="/data">Data</Link> |
        <Link to ="/list" className="nav-link">List</Link>
         <hr />
        <p><Utama /></p>
        
      </div>
    );
  }
}

export default App;