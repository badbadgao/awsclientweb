import './App.css';
import { useEffect, useState } from 'react';
import { getPerson } from './apiService/personService';
import JSONPretty from 'react-json-pretty';


const App = () => {
  const [data, setData] = useState();
  const [year, setYear] = useState();
  const [title, setTitle] = useState();
  // useEffect(() => {
  //   getPerson(year, title)
  //     .then(response => setData(response))
  //     .catch(error => console.log("failed to get person", error));
  // }, []);

  const yearChangeHandler = (event) => {
    const value = event.target.value;
    setYear(value);
  };

  const titleChangeHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const onSubmit = () => {
    getPerson(year, title)
      .then(response => setData(response))
      .catch(error => console.log("failed to get person", error));
  };

  return (
    <div className="App">
      <input value={year} onChange={yearChangeHandler}/>
      <input value={title} onChange={titleChangeHandler}/>
      <button onClick={onSubmit}> Submit</button>
      <JSONPretty id="json-pretty" data={data}></JSONPretty>
    </div>
  );
}

export default App;
