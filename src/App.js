import MyC1 from './components/MyC1';
import './App.css';
import MyC3 from './components/MyC3';



function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <MyC1 surname = 'Singh'/>
      <MyC1 surname = 'Kumar'/>
     <MyC3 platform = "Internet"/>
    </div>
  );
}

export default App;
