import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import BindInConstructor from './components/BindInConstructor';
import NameList from './components/NameList';
import Form from './components/Form';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';



function App() {
  return (
    <div className="App">
      <RefsDemo />
      {/* <ParentComp /> */}
      {/* <Form /> */}
      {/* <NameList /> */}
      {/* <BindInConstructor /> */}
      {/* <UserGreeting /> */}
      {/* <Greet name="Supriya">
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
      <Counter /> */}
      {/* <FunctionClick />
      <ClassClick />  
      <Eventbind />

      <br />
      <ParentComponent /> */}
      
    </div>
  );
}

export default App;
