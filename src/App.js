import './App.css';
import Data from './components/Data';

function App() {
  return (
    <>
      <div className="App">
        <h3>Show & Delete Data jsonplaceholder</h3>
        <p>Fecth API 'https://jsonplaceholder.typicode.com/posts'</p>
        <p>Show 10 Data</p>
        <p>Create Function Delete</p>
        <p>Delete Data</p>
      </div>
      <Data />
    </>
  );
}

export default App;
