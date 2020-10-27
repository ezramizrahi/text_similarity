import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import Results from './components/Results';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  const [textInputOne, setTextInputOne] = useState('');
  const [textInputTwo, setTextInputTwo] = useState('');
  const [textArrayOne, setTextArrayOne] = useState([]);
  const [textArrayTwo, setTextArrayTwo] = useState([]);

  const handleTextInputOne = (event) => {
    setTextInputOne(event.target.value);
  };
  const handleTextInputTwo = (event) => {
    setTextInputTwo(event.target.value);
  };

  useEffect(() => {
    const arrayOfWords = textInputOne.match(/\b(\w+)\b/g);
    setTextArrayOne(arrayOfWords);
  }, [textInputOne]);
  useEffect(() => {
    const arrayOfWords = textInputTwo.match(/\b(\w+)\b/g);
    setTextArrayTwo(arrayOfWords);
  }, [textInputTwo]);

  // Set Intersection
  let setOne = new Set();
  let setTwo = new Set();
  textArrayOne?.forEach(t => setOne.add(t));
  textArrayTwo?.forEach(t => setTwo.add(t));
  let setOneSize = setOne.size;
  let setTwoSize = setTwo.size;
  let intersection = new Set([...setOne].filter(x => setTwo.has(x)))

  return (
    <div className="App">
      <div className="text-input--group">
        <TextInput value={textInputOne} label={"A"} handleChange={e => handleTextInputOne(e)} />
        <TextInput value={textInputTwo} label={"B"} handleChange={e => handleTextInputTwo(e)} />
      </div>
      {intersection &&
        <Results intersection={intersection} />
      }
    </div>
  );
}

export default App;
