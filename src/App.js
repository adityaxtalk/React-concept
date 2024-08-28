
import './App.css';
import Function from './components/Function';
import Props from './components/Props';
import Class from './components/Class';
import EventHandling from './components/EventHandling';
import Controlled from './components/Controlled';
import UnControlled from './components/UnControlled';
import Form from './components/Form';
import FormValidation from './components/FormValidation';
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from './components/Routing';
import Hooks from './components/Hooks';
import Bootstrap from './Bootstrap';
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
<Bootstrap/>
      {/* <Function/> */}
      {/* <Props/> */}
      {/* <Class welcome="hello world"/> */}
      {/* <EventHandling/> */}
      {/* <Controlled/>
      <UnControlled/>
      <Form/>
      <FormValidation/> */}
      <Routing/>
    </div>
  );
}

export default App;
