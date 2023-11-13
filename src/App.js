import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {action,originals} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/Row-Post/RowPost';
import { Axios } from 'axios';


function App() {
  return (
    <div className='App'>
<Navbar/>
<Banner/>
<RowPost url={originals}  title='NetFlix Originals'/>
<RowPost url={action}  title='Action' isSmall/>



    </div>
  );
}

export default App;
