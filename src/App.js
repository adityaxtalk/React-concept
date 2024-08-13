
import './App.css';
import Function from './components/Function';
import Props from './components/Props';
import Class from './components/Class';
import EventHandling from './components/EventHandling';
import Controlled from './components/Controlled';
import UnControlled from './components/UnControlled';
import Form from './components/Form';
import FormValidation from './components/FormValidation';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      {/* <Function/> */}
      {/* <Props/> */}
      {/* <Class welcome="hello world"/> */}
      {/* <EventHandling/> */}
      <Controlled/>
      <UnControlled/>
      <Form/>
      <FormValidation/>
    </div>
  );
}

export default App;
