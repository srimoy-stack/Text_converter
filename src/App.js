
import Navbar from './Componenets/Navbar';
import TextForm from './Componenets/TextForm';
import  { useState } from 'react';
import Alert from './Componenets/Alert';
import About from "./Componenets/About";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  

 
function App(){
  const [mode, setMode] = useState('light'); 

   const [alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
}
  return (
    

    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
  
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextConverter - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;