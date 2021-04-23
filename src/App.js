import React,{useState} from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import SideContact from './Component/SideContact/SideContact.jsx'
import AboutPopup from './Component/PopUpForm/PopUpForm.jsx'
function App() {
   const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
  {/* Here The Pop Up Button is there  */}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        About Pop Up
      </Button>
      <AboutPopup
        show={modalShow}
        onHide={() => setModalShow(false)}/>
        <SideContact/>
    </div>
  );
}

export default App;
