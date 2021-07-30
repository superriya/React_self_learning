import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/message';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Greet name="Supriya">
        <p>This is a greet children</p>
      </Greet>
      <Greet name="Rani">
        <button>Submit</button>
      </Greet>
      <Greet name="Sumit">
        
      </Greet>

      <Welcome name="Riya" heroName="Developer" />
      <Welcome name="Priyanka" heroName="Designer" />
      <Welcome name="Ashwini" heroName="Anchor" />
      <br />
      <Hello />
      <br />
      <Message />
      <br />
      <Counter />
    </div>
  );
}

export default App;
