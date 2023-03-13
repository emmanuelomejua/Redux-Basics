
import { useState } from 'react';
import './app.css';
import Leftbar from './components/leftbar/Leftbar';
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightbar/Rightbar';
import Update from './components/update/Update';

const App = () => {
  const [name, setName] = useState('Chisom')
  return (
    <>
    <Navbar name={name}/>
     <div className="container">
      <Leftbar/>
      <Update/>
      <Rightbar/>
     </div>
    </>

  );
}

export default App;
